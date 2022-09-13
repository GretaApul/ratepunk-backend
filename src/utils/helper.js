require('dotenv').config();
const mysql = require('mysql2/promise');

const { dbConfig } = require('../config');

async function executeDb(sql, dataToDBArr = []) {
  let conn;
  try {
    conn = await mysql.createConnection(dbConfig);
    const [result] = await conn.execute(sql, dataToDBArr);
    return result;
  } catch (error) {
    throw new Error('Error in executeDb!!', error);
  } finally {
    conn?.end();
  }
}

module.exports = {
  executeDb,
};
