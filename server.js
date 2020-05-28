var express = require("express");
var bodyParser = require("body-parser");

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/gfg');
// var db = mongoose.connection;
// db.on('error', console.log.bind(console, "connection error"));
// db.once('open', function (callback) {
//     console.log("connection succeeded");
// })

var app = express()


app.use(bodyParser.json());
// app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', (req, res) => {
    res.send('hi')
    console.log('hello world')
})

app.post('/sign-up', function (req, res) {
  const UI = {
    "first_name": req.body.first_name,
    "second_name": req.body.second_name,
    "email": req.body.email,
    "pass": req.body.password,
    "phone": req.body.phone_number,
    "class_number": req.body.class,
    "school": req.body.school,
    "year": req.body.year,
    "month": req.body.month,
    "day": req.body.day
  }
    console.log(UI.first_name, UI.second_name, UI.email, UI.pass, UI.phone, UI.school, UI.class_number, UI.year, UI.month, UI.day);
    // res.send("success")
    res.redirect('/sign-in')
})

app.post('/sign-in', function (req, res) {
  const UI = {
    "email": req.body.email,
    "pass": req.body.password
  }
    console.log(UI.email, UI.pass);
    // res.send("success")
    res.redirect('/')
})

app.options('/url...', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'POST');
    res.header("Access-Control-Allow-Headers", "accept, content-type");
    res.header("Access-Control-Max-Age", "1728000");
    return res.sendStatus(200);
});

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`))
