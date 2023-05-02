const express = require("express");
const inquirer = require("inquirer");
const mysql = require("mysql2");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Spring2023!",
  database: "employees_db",
});

db.query(`SELECT * FROM department`, (err, department) => {
  if (err) {
    console.log(err);
  }
  console.log(department);
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
