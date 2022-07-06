

import {dailyApy, todayApy } from '../../controllers/v1/appData/apy';
import { Router } from 'express';

const router = Router();
router.get('/daily', dailyApy);
router.get('/today', todayApy);

export default router;