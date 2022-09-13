const { executeDb } = require('../utils/helper');

function postEmailDb(email) {
  const sql = 'INSERT INTO ratepunk (email) VALUES (?)';
  return executeDb(sql, [email]);
}

module.exports = {
  postEmailDb,
};
