

import { createMemberWhiteListWalletAddress, getMemberWalletAddressAndBalance} from '../../controllers/v1/wallet/memberWallet';
import { Router, Request, Response } from 'express';
import { deserializeMerchant } from '../../middleware';
import deviceWare from '../../middleware/device-id';


const router = Router();
router.post('/create', deviceWare, createMemberWhiteListWalletAddress);
router.get('/', deviceWare, getMemberWalletAddressAndBalance);
export default router;