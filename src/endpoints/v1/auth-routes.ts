

import {registerMerchant, MerchantSandboxRegistration, signupSubUser } from '../../controllers/v1/auth/register';
import {getMerchantProfile, getSubUserProfile } from '../../controllers/v1/auth/profile';
import { Router } from 'express';


const router = Router();
router.post('/sandbox/register', MerchantSandboxRegistration);

router.post('/merchant/register', registerMerchant);

router.post('/sub-user/register', signupSubUser);

router.get('/merchant/profile', getMerchantProfile);

router.get('/subuser/profile', getSubUserProfile);

export default router;