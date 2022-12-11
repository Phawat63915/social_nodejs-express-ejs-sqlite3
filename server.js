import app from './src/app.js';

// logic multithreading ยังไม่ได้เขียน 55 เวลาน้อยไป

const PORT = process.env.PORT || 39415
app.listen(PORT, () => {
    console.log(`[START] Listening on http://localhost:${PORT}/`)
})


