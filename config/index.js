require('dotenv').config();
const {createPool} = require('mysql');
let connection = createPool({
    host: process.env.dbHost,
    user: process.env.dbUser,
    password: process.env.dbPwd,
    port: process.env.Port,
    port: process.env.dbName,
    database: process.env.dbName,
    multipleStatements: true
});
module.exports = connection;