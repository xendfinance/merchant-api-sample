

import { createMemberWhiteListWalletAddress, getMemberWalletAddressAndBalance} from '../../controllers/v1/wallet/memberWallet';
import { Router } from 'express';
import deviceWare from '../../middleware/device-id';


const router = Router();
router.post('/create', deviceWare, createMemberWhiteListWalletAddress);
router.get('/', deviceWare, getMemberWalletAddressAndBalance);
export default router;