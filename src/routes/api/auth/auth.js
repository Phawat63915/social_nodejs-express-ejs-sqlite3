import express from 'express';
// import { db } from '../../../database/database.js'

const router = express.Router();

router.post('/register', async (req, res) => {
    try {
        console.log(req.body);
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