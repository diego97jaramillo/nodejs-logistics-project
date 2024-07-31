import { Router } from 'express';
import { warehousesRouter } from '../router/warehousesRouter.js';
import { driversRouter } from '../router/driversRouter.js';
import { shipmentsRouter } from '../router/shipmentsRouter.js';
import { vehiclesRouter } from '../router/vehiclesRouter.js';
const router = Router()

router.use("/warehouses", warehousesRouter);
router.use("/drivers", driversRouter);
router.use("/shipments", shipmentsRouter);
router.use("/vehicles", vehiclesRouter);


export { router }
