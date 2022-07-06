

import { createMemberFixedSavingsProfile, } from '../../controllers/v1/savings/memberSavings';
import { Router } from 'express';


const router = Router();
router.post('/fixed-savings/profile', createMemberFixedSavingsProfile);
export default router;