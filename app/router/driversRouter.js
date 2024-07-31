import {Router} from 'express';
import { getAll, getOne, updateOne, insert, deleteOne } from '../controllers/driverControllers.js';

const driversRouter = Router();


driversRouter.post("/", insert);
driversRouter.get("/", getAll);
driversRouter.get("/:id", getOne);
driversRouter.put("/:id", updateOne);
driversRouter.delete("/:id", deleteOne);




export {driversRouter}
