const express = require("express");
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const PORT = 8080;

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:"projectnandur"
});

// this code is use to synchronize db in every device (only for sequelize)
// db synchronization
// (async () => {
//   try {
//     await db.authenticate();
//     console.log('Connection has been established successfully.');
//     await db.sync();
//     console.log('Database synchronized.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// })();

db.connect(err => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.json({ message: "Hello from backend!"});
});

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
});

// saving data from dht22 into sql database
app.post('/save-data', (req, res) => {
    const [Temperature, Humidity] = req.body;
    const query = "INSERT INTO datanandur (create_time, temperature, humidity) VALUES (NOW(), ?, ?)";
    db.query(query, [Temperature, Humidity], (err, result) => {
        if (err) {
            console.error('Failed to insert data:', err);
            res.status(500).send('Failed to insert data');
            return;
        }
        res.status(200).send('Data saved successfully');
    });
});