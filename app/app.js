const express = require("express");
const fs = require("fs");
const cors = require("cors");
const bodyParser = require("body-parser");
const https = require("https");

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
    console.log("TRIIIIPS")
    var data = fs.readFileSync('input.json', 'utf-8', (err) => {
        if (err) throw err;
    });
    // console.log(data);
    const respObj = JSON.parse(data);
    const {id, dest} = req.query;
    console.log(dest)
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
        // console.log(trip)
        if (trip == undefined) {
            res.status(404).send("Trip not found!")
        } else {
            res.send(trip);
        }
    } else {
        res.send(respObj);
    }

});



app.get("/weather", (req, res) => {
    console.log("WEATHER")
    const {city} = req.query;
    console.log(city)
    const key = "a2f805414680889c73e9efa7ae606fcc";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + key + "&units=metric";
    // const url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=a2f805414680889c73e9efa7ae606fcc&units=metric";
    
    https.get(url, (response)=> {
        console.log(response.statusCode);

        // Additions

        if (response.statusCode !== 200) {
            res.status(response.statusCode).send("Error fetching weather data");
            return;
        }

        response.on("data", (data) => {
            const weatherdata = JSON.parse(data);
            // console.log(weatherdata)
            const temp = weatherdata.main.temp;
            const desc = weatherdata.weather[0].description;
            const icon = weatherdata.weather[0].icon;
            const imgUrl = "https://openweathermap.org/img/wn/"+ icon +"@2x.png"
            console.log(temp);
            console.log(desc);
            console.log(icon);
            console.log(imgUrl);
            res_data = {
                'temp': temp,
                'desc': desc,
                'icon': icon,
                'imgURL': imgUrl
            }
            res.send(res_data)
        });
    });
});

app.listen(3000, (req, res) => {
    console.log("Server on port 3000");
});