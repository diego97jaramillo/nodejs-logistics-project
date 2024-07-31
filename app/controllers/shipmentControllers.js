import { All, findOne, remove, save, update } from "../models/shipmentModel.js";

export const getAll = async (_, res) => {
    try {
        const shipments = await All();
        res.status(200).json({ message: "OK", data: shipments });
    } catch(err) {
        throw new Error("something went wrong", err)
    }
};

export const insert = async (req, res) => {
    const { item, quantity } = req.body
    const shipmentCreated = await save({ item, quantity })
    res.status(201).json({ message: 'shipment created successfully', shipment: shipmentCreated })
};

export const getOne = async (req, res) => {
    const shipment = await findOne(req.params.id);
    if (!shipment) {
       return res.status(404).json({message: 'shipment not found'})
    }
    res.status(200).json({ message: "OK", data: shipment });
};

export const updateOne = async (req, res) => {
    const { item, quantity } = req.body;
    const shipmentUpdated = await update(req.params.id, {item, quantity});
    res.status(202).json({message: 'shipment updated', shipmentUpdated: shipmentUpdated})
};

export const deleteOne = async (req, res) => {
    const shipmentDeleted = await remove(req.params.id);
    res.status(200).json({message: "shipment deleted successfully", shipmentRemoved: shipmentDeleted})
};
