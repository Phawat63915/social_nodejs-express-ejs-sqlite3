import express from 'express';

import api from './api/api.js';
import views from './views/views.js';

const router = express.Router();

router.use('/api', api);
router.use('/', views);

export default router