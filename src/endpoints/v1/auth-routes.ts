

import {registerMerchant, MerchantSandboxRegistration, signupSubUser } from '../../controllers/v1/auth/register';
import {getMerchantProfile, getSubUserProfile } from '../../controllers/v1/auth/profile';
import { Router, Request, Response } from 'express';
import { deserializeMerchant } from '../../middleware';
import deviceWare from '../../middleware/device-id';


const router = Router();
router.post('/sandbox/register', deviceWare, MerchantSandboxRegistration);

router.post('/merchant/register', deviceWare, registerMerchant);

router.post('/sub-user/register', deviceWare, signupSubUser);

router.get('/merchant/profile', deviceWare, getMerchantProfile);

router.get('/subuser/profile', deviceWare, getSubUserProfile);

export default router;