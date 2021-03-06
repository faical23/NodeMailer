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

    let Email = req.body.Email
    let Name = req.body.Name
    let Comment = req.body.Comment
    let Message = `<h2>From : ${Email}</h2><h4>Name : ${Name}<h4><p>Message : ${Comment}<p>`

    let testAccount = await nodemailer.createTestAccount();
  
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL, // generated ethereal user
        pass: process.env.PASS, // generated ethereal password
      },
    });
  
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: `From <${Email}>`, // sender address
      to: "faissalabr@gmail.com", // list of receivers
      subject: "Email From ArdUnifert", // Subject line
      html:Message, // html body
    });

      res.json('succefly email')
  }
  
  main().catch(console.error);
  });