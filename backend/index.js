require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
app.use(cors());

// Middleware to parse JSON request body
app.use(express.json());

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.connect((err) => {

  if (err) {
    console.log("Database connection failed");
    console.log(err);
    return;
  }

  console.log("MySQL Connected");

});

const PORT = process.env.PORT || 3010;

// Home API
app.get("/", (req, res) => {
    res.json({
        message: "Employee Management API",
        status: "Running"
    });
});

// Employee API
app.get("/employees", (req, res) => {

    const sql = "SELECT * FROM employees";

    db.query(sql, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);

    });

});

app.get("/hello", (req, res) => {
    res.send("Hello Manish! Welcome to Express.");
});

app.get("/employees/:id", (req, res) => {

    const employeeId = req.params.id;

    res.json({
        message: `Employee ID is ${employeeId}`
    });

});

app.get("/search", (req, res) => {

    const name = req.query.name;

    res.json({
        search: name
    });

});

app.post("/employees", (req, res) => {

    const { name, department, location } = req.body;

    const sql = `
        INSERT INTO employees
        (name, department, location)
        VALUES (?, ?, ?)
    `;

    db.query(sql, [name, department, location], (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: "Employee added successfully"
        });

    });

});

app.delete("/employees/:id", (req, res) => {

    const id = req.params.id;

    const sql = "DELETE FROM employees WHERE id = ?";

    db.query(sql, [id], (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: "Employee deleted successfully"
        });

    });

});   // <-- This closing brace was missing

app.put("/employees/:id", (req, res) => {

    const id = req.params.id;

    const { name, department, location } = req.body;

    const sql = `
        UPDATE employees
        SET name = ?, department = ?, location = ?
        WHERE id = ?
    `;

    db.query(
        sql,
        [name, department, location, id],
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json({
                message: "Employee updated successfully"
            });

        }
    );

});
app.put("/employees/:id", (req, res) => {

    const id = req.params.id;

    const { name, department, location } = req.body;

    const sql = `
        UPDATE employees
        SET name = ?, department = ?, location = ?
        WHERE id = ?
    `;

    db.query(
        sql,
        [name, department, location, id],
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json({
                message: "Employee updated successfully"
            });

        }
    );

});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});