

import {availableCurrencies, availableCurrencySavings, availableCurrencyStaking } from '../../controllers/v1/appData/currency';
import { Router } from 'express';
import deviceWare from '../../middleware/device-id';


const router = Router();
router.get('/', deviceWare, availableCurrencies);
router.get('/savings', deviceWare, availableCurrencySavings);
router.get('/staking', deviceWare, availableCurrencyStaking);

export default router;