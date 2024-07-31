import { pool } from "../../config/db.js"

export const All = async () => {
    try {
        const [warehouses] = await pool.query('SELECT * FROM warehouses;');
        return warehouses;
    } catch (err) {
        throw new Error('something went wrong in the model', err);
    };
};

export const findOne = async (id) => {
    try {
        const [[warehouse]] = await pool.query('SELECT * FROM warehouses WHERE id = ?;', [id]);
        console.log(warehouse);
        return warehouse;
    } catch (err) {
        throw new Error('warehouse not found', err);
    };
};

export const save = async (warehouse) => {
    try {
        const { name, location } = warehouse;
        const [result] = await pool.query('INSERT INTO warehouses (name, location) VALUES(?,?)', [name, location]);
        const warehouseCreated = await findOne(result.insertId);
        return warehouseCreated;
    } catch (err) {
        throw new Error('warehouse was not created, something went wrong', err);
    };
};

export const update = async (id, warehouse) => {
    try {
        const { name, location } = warehouse;
        await pool.query('UPDATE warehouses SET name=?, location=? WHERE id=?;', [name, location, id]);
        const warehouseUpdated = await findOne(id);
        return warehouseUpdated;
    } catch (err) {
        throw new Error("warehouse couldn't be updated", err);
    };
};

export const remove = async(id) => {
    try {
        const warehouseDeleted = await findOne(id)
        await pool.query('DELETE FROM warehouses WHERE id = ?;', [id]);
        return warehouseDeleted
    } catch (err) {
        throw new Error('warehouse could not be deleted', err)
    }
};
