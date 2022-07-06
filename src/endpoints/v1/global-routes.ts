

import { appVersion, globalEnum, blockchainNetworks} from '../../controllers/v1/appData/global';
import { Router, Request, Response } from 'express';
import { deserializeMerchant } from '../../middleware';
import deviceWare from '../../middleware/device-id';


const router = Router();
router.get('/version', deviceWare, appVersion);
router.get('/enum', deviceWare, globalEnum);
router.get('/blockchain', deviceWare, blockchainNetworks);
export default router;