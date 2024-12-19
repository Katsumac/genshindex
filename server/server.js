const express = require("express");
const app = express();
const cors = require("cors");
const corsOptions = {
    origin: ["http://localhost:5173"]
};

const PORT = process.env.PORT || 8080;

app.use(cors(corsOptions));

app.get("/", (req, res) => {
    res.json({message: "Home Page"});
});

app.get("/login", (req, res) => {
    res.json({message: "Login Page"});
});

app.get("/character", (req, res) => {
    res.json({message: "Character Page"});
})

app.get("/registration", (req, res) => {
    res.json({message: "Registration Page"});
})

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}!`);
});