import fs from 'fs';
import sqlitedb from 'better-sqlite3';

export const db_init = () => {
    let dbbase = './database.db';

    if (!fs.existsSync('./database.db')) {
        sqlitedb(dbbase , sqlitedb.OPEN_READWRITE, {verbose: console.log })
            .exec(fs.readFileSync("./src/database/model/database.sql").toString());
    } else {
        console.log('xxxxxxx')
    }
}