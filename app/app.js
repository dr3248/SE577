const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res)=> {
    res.sendFile(__dirname + "/index.html");
});

//http://localhost:3000/trips
//http://localhost:3000/trips?id=0
//http://localhost:3000/trips?id=1
//http://localhost:3000/trips?id=2
//http://localhost:3000/trips?dest=Africa
app.get("/trips", (req, res) => {
    var data = fs.readFileSync('input.json', 'utf-8', (err) => {
        if (err) throw err;
    });
    // console.log(data);
    const respObj = JSON.parse(data);
    const {id, dest} = req.query;
    if(id) {
        if(id === undefined) {
            res.send(respObj);
        } else if (respObj[id] == undefined) {
            res.status(404).send("Trip not found!")
        } else {
            res.send(respObj[id]);
        }
    } else if (dest) {
        const trip = respObj.find(element => element.destination == dest);
        if (trip == undefined) {
            res.status(404).send("Trip not found!")
        } else {
            res.send(trip);
        }
    } else {
        res.send(respObj);
    }

});

app.listen(3000, (req, res) => {
    console.log("Server on port 3000");
});