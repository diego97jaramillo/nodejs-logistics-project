import mysql from 'mysql2/promise';
let pool;
try {
    pool = mysql.createPool({
        host: 'brundnourtjdecm9coc1-mysql.services.clever-cloud.com',
        user: 'ukxlrbse4ggor4sg',
        database: 'brundnourtjdecm9coc1',
        port: 3306,
        password: 'Q8CiNm8Yn7FgPyYvRk2R',
    });
} catch (err) {
    console.log(err);
};

export { pool };
