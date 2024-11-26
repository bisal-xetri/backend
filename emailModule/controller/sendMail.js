const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();

  // connect with the smtp
  let transporter = await nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: 'reilly.senger87@ethereal.email',
        pass: 'pEaPUe3Y77xXuzAxfr',
    },
  });

  let info = await transporter.sendMail({
    from: '"Bishal Dhakal 👻" <bishaldkl56@gmail.com>', // sender address
    to: "dhakalbishal42@.com", // list of receivers
    subject: "Hello Bishal", // Subject line
    text: "Hello Bishal Dai", // plain text body
    html: "<b>Hello Bishal Dai k cha</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  res.json(info);
};

module.exports = sendMail;