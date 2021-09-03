const express = require('express')
const cors = require('cors')
var nodemailer = require('nodemailer');
require('dotenv').config()



const app = express()

app.use(express.json())
app.use(cors());
app.options('*', cors());


const listener = app.listen(process.env.PORT || 8081, () => {
    console.log('Your app is listening on port ' + listener.address().port )
})

app.get('/', function (req, res) {
    res.send({Message : 'Succefly Api'})
})

app.post('/SendMessage', function (req, res) {
  "use strict";
  const nodemailer = require("nodemailer");
  
  // async..await is not allowed in global scope, must use a wrapper
  async function main() {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();
  
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "faicalbahsis666@gmail.com", // generated ethereal user
        pass: "gU_&#!Gs645", // generated ethereal password
      },
    });
  
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Fred Foo 👻" <foo@example.com>', // sender address
      to: "faissalabr@gmail.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // html body
    });

      res.json('succefly email')
  }
  
  main().catch(console.error);
  });