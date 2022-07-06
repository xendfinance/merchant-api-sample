

import { createMemberFixedSavingsProfile, } from '../../controllers/v1/savings/memberSavings';
import { Router } from 'express';
import deviceWare from '../../middleware/device-id';


const router = Router();
router.post('/fixed-savings/profile', deviceWare, createMemberFixedSavingsProfile);
export default router;