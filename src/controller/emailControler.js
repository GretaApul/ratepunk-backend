const { postEmailDb } = require('../model/emailModel');

async function postEmail(req, res) {
  const { email } = req.body;

  try {
    const saveResult = await postEmailDb(email);
    if (saveResult.affectedRows === 1) {
      res.status(201).json({ succes: 'Email successfully added' });
      return;
    }
    res.status(400).json({ err: 'Error in submitting Email ' });
  } catch (error) {
    res.sendStatus(500);
  }
}

module.exports = {
  postEmail,
};
