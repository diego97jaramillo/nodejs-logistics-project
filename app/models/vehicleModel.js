import { pool } from "../../config/db.js"

const All = async () => {
    try {
        const [vehicles] = await pool.query('SELECT * FROM vehicles;');
        return vehicles;
    } catch (err) {
        throw new Error('something went wrong in the model', err);
    };
};

const findOne = async (id) => {
    try {
        const [[vehicle]] = await pool.query('SELECT * FROM vehicles WHERE id = ?;', [id]);
        return vehicle;
    } catch (err) {
        throw new Error('vehicle not found', err);
    };
};

const save = async (vehicle) => {
    try {
        const { model, year } = vehicle;
        const [result] = await pool.query('INSERT INTO vehicles (model, year) VALUES(?,?)', [model, year]);
        const vehicleCreated = await findOne(result.insertId);
        return vehicleCreated;
    } catch (err) {
        throw new Error('vehicle was not created, something went wrong', err);
    };
};

const update = async (id, vehicle) => {
    try {
        const { model, year } = vehicle;
        await pool.query('UPDATE vehicles SET model=?, year=? WHERE id=?;', [model, year, id]);
        const vehicleUpdated = await findOne(id);
        return vehicleUpdated;
    } catch (err) {
        throw new Error("vehicle couldn't be updated", err);
    };
};

const remove = async(id) => {
    try {
        const vehicleDeleted = await findOne(id)
        if(!vehicleDeleted) {
            throw new Error();
        }
        await pool.query('DELETE FROM vehicles WHERE id = ?;', [id]);
        return vehicleDeleted;
    } catch (err) {
        throw new Error('vehicle could not be deleted');
    }
};

export { All, findOne, save, update, remove}
