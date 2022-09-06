const { sendEmail } = require('../services/email.service');

const sendFormEmail = async (req, res) => {
  const data = req.body;

  const text = `Name: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`;
  await sendEmail('agoumi94@icloud.com', 'New Form Submission', text);
  res.status(200).send('Email sent successfully');
};

module.exports = {
  sendFormEmail,
};
