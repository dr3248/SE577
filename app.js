const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/trips", (req, res) => {
    var data = fs.readFileSync('input.json', 'utf-8', (err) => {
        if (err) throw err;
        // obj = JSON.parse(data);
        // console.log(data);
    });
    console.log(data);
    const respObj = JSON.parse(data);
    // console.log('id: ' + req.query.q);
    //http://localhost:3000/trips?q=Africa&p=5days&b=$500
    const id = req.query.id;
    
    if(id === undefined) {
        res.send(respObj);
    } else {
        console.log("id = ", id);
        res.send(respObj[id]);
    }

});

app.listen(3000, (req, res) => {
    console.log("Server on port 3000");
});