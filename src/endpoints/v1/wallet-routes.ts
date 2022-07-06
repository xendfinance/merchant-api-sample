

import { createMemberWhiteListWalletAddress, getMemberWalletAddressAndBalance} from '../../controllers/v1/wallet/memberWallet';
import { Router } from 'express';

const router = Router();
router.post('/create', createMemberWhiteListWalletAddress);
router.get('/', getMemberWalletAddressAndBalance);
export default router;