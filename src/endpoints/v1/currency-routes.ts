

import {availableCurrencies, availableCurrencySavings, availableCurrencyStaking } from '../../controllers/v1/appData/currency';
import { Router } from 'express';

const router = Router();
router.get('/', availableCurrencies);
router.get('/savings', availableCurrencySavings);
router.get('/staking', availableCurrencyStaking);

export default router;