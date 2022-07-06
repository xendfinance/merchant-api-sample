

import { appVersion, globalEnum, blockchainNetworks} from '../../controllers/v1/appData/global';
import { Router } from 'express';


const router = Router();
router.get('/version', appVersion);
router.get('/enum', globalEnum);
router.get('/blockchain', blockchainNetworks);
export default router;