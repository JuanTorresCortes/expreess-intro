const express = require('express')
const movies = require("./movies")
const app = express();
const PORT = 3000;

app.get("/index", (req, res) => {
    res.send("hello from express")
});

app.get("/about", (req, res) => {
    res.status(200).send("hello from express")
});

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})