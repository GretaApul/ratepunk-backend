const { executeDb } = require('../utils/helper');

function getEmailDb() {
  const sql = 'SELECT * FROM ratepunk';
  return executeDb(sql, []);
}

function postEmailDb(email) {
  const sql = 'INSERT INTO ratepunk (email) VALUES (?)';
  return executeDb(sql, [email]);
}

module.exports = {
  getEmailDb,
  postEmailDb,
};
