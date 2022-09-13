const { getEmailDb, postEmailDb } = require('../model/emailModel');

async function getEmail(req, res) {
  try {
    const emailArr = await getEmailDb();
    if (emailArr.affectedRows === 1) {
      res.status(201).json({ msg: 'Email submitted', changes: 1 });
      return;
    }
    res.status(400).json({ err: 'Email was not submitted', changes: 0 });
  } catch (error) {
    if (error.code === 'ER_DUP_ENTRY') {
      res.status(400).json({ err: 'This email was alredy used', changes: 0 });
      return;
    }

    res.status(500).json({ err: 'Email was not submitted', changes: 0 });
  }
}

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
  getEmail,
  postEmail,
};
