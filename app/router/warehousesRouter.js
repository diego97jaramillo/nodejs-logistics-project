import { Router } from "express";
import { getAll, insert, getOne, updateOne, deleteOne } from "../controllers/warehouseControllers.js";
const warehousesRouter = Router();


warehousesRouter.get("/", getAll);
warehousesRouter.get("/:id", getOne);
warehousesRouter.post("/", insert);
warehousesRouter.put("/:id", updateOne);
warehousesRouter.delete("/:id", deleteOne);


export { warehousesRouter }
