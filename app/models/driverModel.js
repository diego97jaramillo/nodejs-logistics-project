import { pool } from "../../config/db.js"

export const All = async () => {
    try {
        const [drivers] = await pool.query('SELECT * FROM drivers;');
        return drivers;
    } catch (err) {
        throw new Error('something went wrong in the model', err);
    };
};

export const findOne = async (id) => {
    try {
        const [[drivers]] = await pool.query('SELECT * FROM drivers WHERE id = ?;', [id]);
        console.log(drivers);
        return drivers;
    } catch (err) {
        console.log(err);
        throw new Error('driver not found', err);
    };
};

export const save = async (driver) => {
    try {
        const { name } = driver;
        const [result] = await pool.query('INSERT INTO drivers (name) VALUES(?)', [name]);
        const driverCreated = await findOne(result.insertId);
        return driverCreated;
    } catch (err) {
        throw new Error('driver was not created, something went wrong', err);
    };
};

export const update = async (id, driver) => {
    try {
        const { name } = driver;
        await pool.query('UPDATE drivers SET name=? WHERE id=?;', [name, id]);
        const driverUpdated = await findOne(id);
        return driverUpdated;
    } catch (err) {
        throw new Error("driver couldn't be updated", err);
    };
};

export const remove = async(id) => {
    try {
        const driverDeleted = await findOne(id)
        await pool.query('DELETE FROM drivers WHERE id = ?;', [id]);
        return driverDeleted
    } catch (err) {
        throw new Error('driver could not be deleted', err)
    }
};
