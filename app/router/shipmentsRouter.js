import { Router } from "express";
import { getAll, insert, getOne, updateOne, deleteOne } from "../controllers/shipmentControllers.js";
const shipmentsRouter = Router();


shipmentsRouter.get("/", getAll);
shipmentsRouter.get("/:id", getOne);
shipmentsRouter.post("/", insert);
shipmentsRouter.put("/:id", updateOne);
shipmentsRouter.delete("/:id", deleteOne);


export { shipmentsRouter }
