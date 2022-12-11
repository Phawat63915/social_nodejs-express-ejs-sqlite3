import path from 'path';
import express from 'express';

import router from './routes/route.js'
import { db_session } from './database/session.js'
// import { db_init } from './database/database_init.js'

// db_init();
const app = express();

app.use(db_session);
app.set('views', path.join('./views'));
app.set('views engine', 'ejs');
app.use('/', express.static(path.join('./public')));

app.use(express.json()) // for json
app.use(express.urlencoded({ extended: true})) // for form data

app.use(router);

export default app;