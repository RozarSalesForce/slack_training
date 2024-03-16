const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const redis = require('redis');


const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());
app.listen(3001, () => {
    console.log("server in on ...");
})

//redis connection
const redisClient = redis.createClient("redisc config");
redisClient.connect().then(()=>{
    console.log("Redis connected ...")
}).catch((err) =>{
    console.log("error :", err);
})

// mongo db connection
mongoose.connect("mongodb+srv://yogeshbhakli:4f27NeSt02fIZUFl@cluster0.nsri0sp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(() =>{
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
    redisClient.get('allTesters').then( response =>{
        res.json(JSON.parse(response));
    }).catch(() =>{
        testerModel.find().then( function(testers) {
            redisClient.set('allTesters', JSON.stringify(testers));
            res.json(testers);
        }).catch(function(err){
            console.log(err);
        })
    })
})

app.post('/saveTester', (req, res) =>{
    testerModel.create(req.body).then((result) =>{
        res.send("user");
    }).catch(err =>{
        console.log(err);
    })
})