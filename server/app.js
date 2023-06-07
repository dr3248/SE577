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

        // Additions for Error

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


// app.post("/login", (req, res) => {
//     const { email, password } = req.body;
  
//     // Check if the entered email and password match the stored credentials
//     const storedEmail = localStorage.getItem("email");
//     const storedPassword = localStorage.getItem("password");
  
//     if (email === storedEmail && password === storedPassword) {
//       res.status(200).json({ message: "Login successful" });
//     } else {
//       res.status(401).json({ message: "Invalid email or password" });
//     }
//   });

// const { OAuth2Client } = require('google-auth-library');
// const client = new OAuth2Client('530316403367-rps07n9reu3b2ot08a5gaupgs5m2f2m4.apps.googleusercontent.com'); 

//   app.post('/google-login', async (req, res) => {
//     const { token } = req.body;
  
//     try {
//       const ticket = await client.verifyIdToken({
//         idToken: token,
//         audience: '530316403367-rps07n9reu3b2ot08a5gaupgs5m2f2m4.apps.googleusercontent.com', 
  
//       const { email } = ticket.getPayload();
    
//       res.status(200).json({ message: 'Login successful' });
//     } catch (error) {
//       console.error(error);
//       res.status(401).json({ message: 'Invalid token' });
//     }
//   });


app.get("/booked-trips", (req, res) => {
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


// app.get("/about", (req, res) => {
//     const key = "530316403367-rps07n9reu3b2ot08a5gaupgs5m2f2m4.apps.googleusercontent.com";
//     const url = "https://accounts.google.com/gsi/select?client_id=" + key + "&ux_mode=popup&ui_mode=bottom_sheet&as=HSeP1TA3FVhTKkhmzQ0r3Q&channel_id=5a728db1612d64a3dbb7ac426ae3e8b0cb7b57d3ca1d9c98c56e4f7d9344b0da&origin=http%3A%2F%2Flocalhost%3A5173";
   
//     https.get(url, (response)=> {
//         console.log(response.statusCode);

//         // Additions for Error

//         if (response.statusCode !== 200) {
//             res.status(response.statusCode).send("Error fetching weather data");
//             return;
//         }

        // response.on("data", (data) => {
        //     const weatherdata = JSON.parse(data);
        //     // console.log(weatherdata)
        //     const temp = weatherdata.main.temp;
        //     const desc = weatherdata.weather[0].description;
        //     const icon = weatherdata.weather[0].icon;
        //     const imgUrl = "https://openweathermap.org/img/wn/"+ icon +"@2x.png"
        //     console.log(temp);
        //     console.log(desc);
        //     console.log(icon);
        //     console.log(imgUrl);
        //     res_data = {
        //         'temp': temp,
        //         'desc': desc,
        //         'icon': icon,
        //         'imgURL': imgUrl
        //     }
        //     res.send(res_data)
//        /// });
//     });
// });

app.listen(3000, (req, res) => {
    console.log("Server on port 3000");
});