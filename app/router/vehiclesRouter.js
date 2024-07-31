import { Router } from "express";
import { getAll, insert, getOne, updateOne, deleteOne } from "../controllers/vehiclesControllers.js";
const vehiclesRouter = Router();


vehiclesRouter.get("/", getAll);
vehiclesRouter.get("/:id", getOne);
vehiclesRouter.post("/", insert);
vehiclesRouter.put("/:id", updateOne);
vehiclesRouter.delete("/:id", deleteOne);


export { vehiclesRouter }
