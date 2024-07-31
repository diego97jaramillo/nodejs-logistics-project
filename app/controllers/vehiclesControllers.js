import { All, findOne, remove, save, update } from "../models/vehicleModel.js";

export const getAll = async (_, res) => {
    try {
        const vehicles = await All();
        res.status(200).json({ message: "OK", data: vehicles });
    } catch(err) {
        throw new Error("something went wrong", err)
    }
};

export const insert = async (req, res) => {
    const { model, year } = req.body
    const vehicleCreated = await save({ model, year })
    res.status(201).json({ message: 'vehicle created successfully', vehicle: vehicleCreated })
};

export const getOne = async (req, res) => {
    const vehicle = await findOne(req.params.id);
    if (!vehicle) {
       return res.status(404).json({message: 'vehicle not found'})
    }
    res.status(200).json({ message: "OK", data: vehicle });
};

export const updateOne = async (req, res) => {
    const { model, year } = req.body;
    const vehicleUpdated = await update(req.params.id, {model, year});
    res.status(202).json({message: 'vehicle updated', vehicleUpdated: vehicleUpdated})
};

export const deleteOne = async (req, res) => {
    const vehicleDeleted = await remove(req.params.id);
    res.status(200).json({message: "vehicle deleted successfully", vehicleRemoved: vehicleDeleted})
};
