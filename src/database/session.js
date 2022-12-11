import sqlite from "better-sqlite3";
import session from "express-session";
import SqliteStore_ from "better-sqlite3-session-store";

const SqliteStore = SqliteStore_(session)

export const db_session = session({
    store: new SqliteStore({
      client: sqlite("sessions.db", { 
        // verbose: console.log 
      }), 
      expired: {
        clear: true,
        intervalMs: 900000 //ms = 15min ทดสอบแบบรีเร็ว
      }
    }),
    secret: 'https://www.youtube.com/@phwt & phawats@outlook.com & 0803294155',
    resave: false,
    saveUninitialized: true
})