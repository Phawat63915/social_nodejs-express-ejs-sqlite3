import express from 'express';
import { db } from '../../../database/database.js'
import { hash_password } from '../../../middleware/hashpassword.js';
import { check_password } from '../../../middleware/checkpassword.js'

const router = express.Router();

router.post('/register', async (req, res) => {
    console.log('Register Process')
    try {
        
        if (!req.body.fname || 
            !req.body.lname ||
            !req.body.email ||
            !req.body.password || req.body.password.length > 256 && req.body.password.length < 5 || req.body.password !== req.body.password
        ) { throw "limit" }
        
        const test = db.prepare('INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?) RETURNING *')
            .get(req.body.fname, req.body.lname, req.body.email.toLowerCase(), hash_password(req.body.password));
        console.log(test);

        //test case login
        console.log(check_password(test.password, req.body.password));
        
        return res.status(200).json({
            error: false,
            message: "ok",
        });
    } catch (error) {
        console.log('Error occured', error.message)
        return res.status(400).json({ message: error.message })
    }
});

router.post('/login', async (req, res) => {
    console.log('Login Process')
    try {
        
        if (!req.body.email ||
            !req.body.password
        ) { throw "limit" }
        
        const user_data = db.prepare('SELECT * FROM users WHERE email = ?')
            .get(req.body.email.toLowerCase());
        console.log(user_data);

        //test case login
        if (check_password(user_data.password, req.body.password)) {

            req.session.regenerate(function (err) {
                if (err) next(err)

                req.session.user = {
                    id: user_data.user_id
                }
                req.session.save(function (err) {})
            })

            console.log(req.session.user)

            return res.status(200).json({
                error: false,
                message: "logih ok",
            });
        } else {
            return res.status(200).json({
                error: true,
                message: "logih faill",
            });
        }
    } catch (error) {
        console.log('Error occured', error.message)
        return res.status(400).json({ message: error.message })
    }
});

router.post('/logout', async (req, res) => {
    console.log('Login Process');
    try {
        
        req.session.user = null
        req.session.save(function (err) {
            if (err) next(err)
            
            req.session.regenerate(function (err) {
                if (err) next(err)
                return res.status(200).json({
                    error: false,
                    message: "logout ok",
                });
            })
        })

    } catch (error) {
        console.log('Error occured', error.message)
        return res.status(400).json({ message: error.message })
    }
});

router.get('/', async (req, res) => {
    try {
        return res.send("welcome api auth")
    } catch (error) {
        console.log('Error occured', error.message)
        return res.status(400).json({ message: error.message })
    }
});

export default router