import express from 'express';

import auth from './auth/auth.js';
import test from './test/test.js'

const router = express.Router();

router.use('/auth', auth);
router.use('/test', test);

router.get('/', async (req, res) => {
    try {
        return res.send("welcome api")
    } catch (error) {
        console.log('Error occured', error.message)
        return res.status(400).json({ message: error.message })
    }
});

export default router