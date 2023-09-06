const mysql = require('mysql2/promise')

const pool = mysql.createPool({
    host: 'mysql-db-1',
    user: 'root',
    password: '000000000',
    database: 'mydb',
    port: 3306
})

async function executeQuery(query, values = []) {
    try {
        const [rows, fields] = await pool.query(query, values)
        return rows
    } catch (error) {
        throw error
    }
}

module.exports = executeQuery
