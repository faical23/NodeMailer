const express = require('express')
const cors = require('cors')
var nodemailer = require('nodemailer');
require('dotenv').config()



const app = express()

app.use(express.json())
app.use(cors());
app.options('*', cors());


const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('Your app is listening on port ' + listener.address().port )
})


app.get('/', (req, res) => {
    res.send('succefly open server')
})
app.post('/SendMessage', function (req, res) {
    let Email = req.body.Email
    let Name = req.body.Name
    let Comment = req.body.Comment
    let Message = `<h2>From : ${Email}</h2><h4>Name : ${Name}<h4><p>Message : ${Comment}<p>`
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        secure: false,
        port: 587,
        auth: {
          user: process.env.MY_EMAIL,
          pass: process.env.PASS
        }
      });
      
      var mailOptions = {
        from:Email,
        to: 'faissalabr@gmail.com',
        subject: 'From ARD UNIFET',
        html:Message
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
    res.json({Email,Name,Comment})
  });

 



