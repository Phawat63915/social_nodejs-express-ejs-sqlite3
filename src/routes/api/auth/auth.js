import express from 'express';
import { db } from '../../../database/database.js'
import { hash_password } from '../../../middleware/hashpassword.js';
import { check_password } from '../../../middleware/checkpassword.js'

const router = express.Router();

router.post('/register', async (req, res) => {
    try {
        
        if (!req.body.fname || 
            !req.body.lname ||
            !req.body.email ||
            !req.body.password || req.body.password.length > 256 && req.body.password.length < 5 || req.body.password !== req.body.password
        ) { throw "limit" }
        
        const test = db.prepare('INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?) RETURNING *')
            .get(req.body.fname, req.body.lname, req.body.email, hash_password(req.body.password));
        console.log(test);

        //test case
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

router.get('/', async (req, res) => {
    try {
        return res.send("welcome api auth")
    } catch (error) {
        console.log('Error occured', error.message)
        return res.status(400).json({ message: error.message })
    }
});

export default router