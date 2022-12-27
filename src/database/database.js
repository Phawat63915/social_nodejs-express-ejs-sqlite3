import sqlitedb from 'better-sqlite3';
import fs from 'fs';

let dbbase = './database.db';

if (!fs.existsSync('./database.db')) {
    sqlitedb(dbbase , sqlitedb.OPEN_READWRITE, {verbose: console.log })
        .exec(fs.readFileSync("./src/database/model/database.sql").toString());
}

export const db = new sqlitedb('./database.db' , sqlitedb.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message);
    }
    verbose: console.log}
);