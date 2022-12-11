import express from 'express';

import { isAuth, isNonAuth } from '../../middleware/auth.js'

const router = express.Router();

router.get('/', isAuth, async (req, res) => {
    res.render('index.ejs');
});

router.get('/login', isNonAuth, async (req, res) => {
    res.render('login.ejs');
});

router.get('/register', isNonAuth, async (req, res) => {
    res.render('register.ejs');
});

router.get('/', async (req, res) => {
    try {
        return res.send("welcome views")
    } catch (error) {
        console.log('Error occured', error.message)
        return res.status(400).json({ message: error.message })
    }
});

export default router