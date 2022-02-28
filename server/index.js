//Import the express package
const express = require("express");

//Import the cors package
//This allows client and server to communicate with each other without the need for
//advanced configuration
const cors = require("cors");

//app variable will allow us to initialize express commands
const app = express();

//Allow us to accept and use JSON objects in our server's responses.
app.use(express.json());
app.use(cors());

//Create a follow GET endpoint and method
app.get("/api/user", (req, res) => {
    let friends = ["Nitin", "Eric", "Jeddy", "Cameron", "Riley"];
    res.status(200).send(friends);
});

//Create an endpoint and method to handle sending friends array
app.get("/api/users", (req, res) =>{
    let friends = ["Nitin", "Eric", "Jeddy", "Cameron", "Riley"];
    res.status(200).send(friends);
});

//Add an endpoint to tell how the weather is
// app.get("/weather/:temperature", (req, res) => {
//     const phrase = `<h3>It was ${req.params.temperature} today </h3>`;
//     res.status.send(phrase);
// })

app.get("/weather/:temperature", (req, res) => {
    const {temperature} = req.params;
    const phrase = `<h3>It was ${temperature} today </h3>`;
    res.status(200).send(phrase);
})

//Set up express server to listen to requests on port 4000
app.listen(4000, () => {
    console.log(`Server is running on port 4000`);
})

