import { Router } from "express";
import authRoutes from "./auth-routes";
import currencyRoutes from "./currency-routes";
import apyRoutes from "./apy-routes";
import walletRoutes from "./wallet-routes";
import globalRoutes from "./global-routes";


const router = Router();

  router.use("/auth", authRoutes);
  router.use("/currency", currencyRoutes);
  router.use("/apy", apyRoutes);
  router.use("/apy", apyRoutes);
  router.use("/global", globalRoutes);
  router.use("/wallet", walletRoutes);
 

export default router;
