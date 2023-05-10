const express = require("express");
const fs = require("fs");

const app = express();

app.get("/", (req, res)=> {
    res.sendFile(__dirname + "/index.html");
});

//http://localhost:3000/trips
//http://localhost:3000/trips?id=0
//http://localhost:3000/trips?id=1
//http://localhost:3000/trips?id=2
app.get("/trips", (req, res) => {
    var data = fs.readFileSync('input.json', 'utf-8', (err) => {
        if (err) throw err;
    });
    // console.log(data);
    const respObj = JSON.parse(data);
    const id = req.query.id;
    if(id === undefined) {
        res.send(respObj);
    } else if (respObj[id] == undefined) {
        res.status(404).send("Trip not found!")
    } else {
        res.send(respObj[id]);
    }
});

app.listen(3000, (req, res) => {
    console.log("Server on port 3000");
});