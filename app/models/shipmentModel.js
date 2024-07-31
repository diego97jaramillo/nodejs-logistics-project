import { pool } from "../../config/db.js"

const All = async () => {
    try {
        const [shipments] = await pool.query('SELECT * FROM shipments;');
        return shipments;
    } catch (err) {
        throw new Error('something went wrong in the model', err);
    };
};

const findOne = async (id) => {
    try {
        const [[shipment]] = await pool.query('SELECT * FROM shipments WHERE id = ?;', [id]);
        console.log(shipment);
        return shipment;
    } catch (err) {
        throw new Error('shipment not found', err);
    };
};

const save = async (shipment) => {
    try {
        const { item, quantity } = shipment;
        const [result] = await pool.query('INSERT INTO shipments (item, quantity) VALUES(?,?)', [item, quantity]);
        const shipmentCreated = await findOne(result.insertId);
        return shipmentCreated;
    } catch (err) {
        throw new Error('shipment was not created, something went wrong', err);
    };
};

const update = async (id, shipment) => {
    try {
        const { item, quantity } = shipment;
        await pool.query('UPDATE shipments SET item=?, quantity=? WHERE id=?;', [item, quantity, id]);
        const shipmentUpdated = await findOne(id);
        return shipmentUpdated;
    } catch (err) {
        throw new Error("shipment couldn't be updated", err);
    };
};

const remove = async(id) => {
    try {
        const shipmentDeleted = await findOne(id)
        await pool.query('DELETE FROM shipments WHERE id = ?;', [id]);
        return shipmentDeleted
    } catch (err) {
        throw new Error('shipment could not be deleted', err)
    }
};

export { All, findOne, save, update, remove}
