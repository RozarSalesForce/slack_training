const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());
app.listen(3001, () => {
    console.log("server in on ...");
})
mongoose.connect("mongodb://localhost:27017/testers").then(() =>{
    console.log("mongoDB connected");
}).catch((err) =>{
    console.log("error :", err);
})
const mockData = require('./mockTesters.json');

const testerSchema = new mongoose.Schema({
    firstname: String,
    lastname: String
})

const testerModel = mongoose.model("testerdetails", testerSchema);

app.get('/getTesters', (req, res) =>{
    testerModel.find().then( function(testers) {
        res.json(testers);
    }).catch(function(err){
        console.log(err);
    })
})

app.post('/saveTester', (req, res) =>{
    testerModel.create(req.body).then((result) =>{
        res.send("user");
    }).catch(err =>{
        console.log(err);
    })
})