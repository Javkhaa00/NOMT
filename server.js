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
    var first_name = req.body.first_name;
    var second_name = req.body.second_name;
    var email = req.body.email;
    var pass = req.body.password;
    var phone = req.body.phone_number;
    var class_number = req.body.class;
    var school = req.body.school;
    var year = req.body.year;
    var month = req.body.month;
    var day = req.body.day;
    console.log(first_name, second_name, email, pass, phone, school, class_number, year, month, day);
    res.send("success")
})
app.options('/url...', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'POST');
    res.header("Access-Control-Allow-Headers", "accept, content-type");
    res.header("Access-Control-Max-Age", "1728000");
    return res.sendStatus(200);
});

// app.get('/', function (req, res) {
//     res.set({
//         'Access-control-Allow-Origin': '*'
//     })
// }).listen(3000)

const PORT = process.env.PORT || 9000
app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`))
