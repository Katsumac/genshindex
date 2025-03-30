const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql2");

// const corsOptions = {
//     origin: ["http://localhost:5173"]
// };
const PORT = process.env.PORT || 8080;

app.use(cors());

app.get("/", (req, res) => {
    res.json({message: "Home Page"});
});

app.get("/users", (req, res) => {
    const db = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: '',
        port: 3307,
        database: "genshindex"
    });
    
    db.connect();
    db.query("SELECT * FROM test", (error, data) => {
        if (error) {
            console.log(error);
        }
        res.json(data);
        db.end();
    });
})

app.get("/login", (req, res) => {
    res.json({message: "Login Page"});
});

app.get("/character", (req, res) => {
    res.json({message: "Character Page"});
})

app.get("/registration", (req, res) => {
    res.json({message: "Registration Page"});
})

app.get("/profile", (req, res) => {
    res.json({message: "Profile Page"});
})

app.get("/editprofile", (req, res) => {
    res.json({message: "Edit Profile Page"});
})

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}!`);
});