const express = require("express")
const mysql = require("mysql2");

const app = express();


const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "crud"
});

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello world")
})
app.get("/details", (req, res) => {
    const sqlGet = "SELECT * FROM contact";
    db.query(sqlGet, (err, data) => {
        if (err) {
            return res.json(err)
        }
        return res.json(data);
    })
});

app.post("/details", (req, res) => {
    const sqlInsert = "INSERT INTO contact (`name`, `email`, `contact`) VALUES (?)";
    const values = [ 
        req.body.name,
        req.body.email,
        req.body.contact
    ];
    db.query(sqlInsert, [values], (err, data) => {
        if (err) {
            return res.json(err)
        }
        return res.json("User Created!");
    })
})


app.listen(5000, () => {
    console.log("Santhosh kumar")
})