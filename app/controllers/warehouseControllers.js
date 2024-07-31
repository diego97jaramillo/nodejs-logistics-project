import { All, findOne, remove, save, update } from "../models/warehouseModel.js";

export const getAll = async (_, res) => {
    try {
        const warehouses = await All();
        res.status(200).json({ message: "OK", data: warehouses });
    } catch(err) {
        throw new Error("something went wrong", err)
    }
};

export const insert = async (req, res) => {
    const { name, location } = req.body
    const warehouseCreated = await save({ name, location })
    res.status(201).json({ message: 'warehouse created successfully', warehouse: warehouseCreated })
};

export const getOne = async (req, res) => {
    const warehouse = await findOne(req.params.id);
    if (!warehouse) {
       return res.status(404).json({message: 'warehouse not found'})
    }
    res.status(200).json({ message: "OK", data: warehouse });
};

export const updateOne = async (req, res) => {
    const { name, location } = req.body;
    const warehouseUpdated = await update(req.params.id, {name, location});
    res.status(202).json({message: 'warehouse updated', WarehouseUpdated: warehouseUpdated})
};

export const deleteOne = async (req, res) => {
    const warehouseDeleted = await remove(req.params.id);
    res.status(200).json({message: "warehouse deleted successfully", warehouseRemoved: warehouseDeleted})
};
