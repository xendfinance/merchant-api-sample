

import {dailyApy, todayApy } from '../../controllers/v1/appData/apy';
import { Router } from 'express';
import deviceWare from '../../middleware/device-id';


const router = Router();
router.get('/daily', deviceWare, dailyApy);
router.get('/today', deviceWare, todayApy);

export default router;