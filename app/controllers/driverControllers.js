import { All, findOne, remove, save, update } from "../models/driverModel.js";

export const getAll = async (_, res) => {
    try {
        const drivers = await All();
        res.status(200).json({ message: "OK", data: drivers });
    } catch(err) {
        throw new Error("something went wrong", err)
    }
};

export const insert = async (req, res) => {
    try {
        const { name } = req.body
        if (!name) {
            res.status(400).send("Something is wrong")
        }
        const driverCreated = await save({ name})
        res.status(201).json({ message: 'driver created successfully', driver: driverCreated })
    } catch (error) {
        console.log(error);
        throw new Error('something went wrong with the request', error)
    }
};

export const getOne = async (req, res) => {
    const driver = await findOne(req.params.id);
    if (!driver) {
       return res.status(404).json({message: 'driver not found'})
    }
    res.status(200).json({ message: "OK", data: driver });
};

export const updateOne = async (req, res) => {
    const { name } = req.body;
    if (!name) {
        res.status(400).send("Something is wrong")
    }
    const driverUpdated = await update(req.params.id, {name});
    res.status(202).json({message: 'driver updated', driverUpdated: driverUpdated})
};

export const deleteOne = async (req, res) => {
    const driverDeleted = await remove(req.params.id);
    res.status(200).json({message: "driver deleted successfully", driverRemoved: driverDeleted})
};
