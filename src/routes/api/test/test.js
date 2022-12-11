import express from 'express';
import { db } from '../../../database/database.js'

const router = express.Router();

router.get('/a', async (req, res) => {
    try {
        const test = db.prepare('INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?) RETURNING *').run('phawat','sorratat','phawat@ph.com','123')
        console.log(test)
        return res.send("welcome api test a")
    } catch (error) {
        console.log('Error occured', error.message)
        return res.status(400).json({ message: error.message })
    }
});

router.get('/', async (req, res) => {
    try {
        return res.send("welcome api test")
    } catch (error) {
        console.log('Error occured', error.message)
        return res.status(400).json({ message: error.message })
    }
});

export default router