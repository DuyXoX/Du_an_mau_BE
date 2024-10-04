// Model (cấu hình định dạng giá trị của key, vd: user: kiểu string...)
const mysql = require('mysql2');

const userModel = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

module.exports = userModel;