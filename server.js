const inquirer = require("inquirer");
const mysql = require("mysql2");
require("dotenv").config();

const db = mysql.createConnection({
  host: "localhost",
  user: process.env.DB_ROOT,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

function askQuestion() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What would you like to do?",
        name: "q1",
        choices: [
          "view all departments",
          "view all roles",
          "View all employees",
          "add a department",
          "add a role",
          "add a employee",
          "Update an employee role",
          "End Program",
        ],
      },
    ])
    .then((response) => {
      const { q1 } = response;
      if (q1 === "view all departments") {
        db.query(`SELECT * FROM department`, (err, department) => {
          if (err) {
            console.log(err);
          }
          console.table(department);
          askQuestion();
        });
      }
      if (q1 === "View all employees") {
        //TODO: SELECT * FROM Employees
        db.query(`SELECT * FROM employees`, (err, employee) => {
          if (err) {
            console.log(err);
          }
          console.table(employee);
          askQuestion();
        });
      }
      if (q1 === "view all roles") {
        db.query(`SELECT * FROM role`, (err, roles) => {
          if (err) {
            console.log(err);
          }
          console.table(roles);
          askQuestion();
        });
      }
      if (q1 === "add a department") {
        //TODO: Inquirer Input.then INSERT USER INPUT INTO DEPARTMENTS
        addDepartment();
      }
      if (q1 === "add a role") {
        //TODO: SELECT * FROM DEPARTMENTS
        addRole();
      }
      if (q1 === "add a employee") {
        //TODO: SELECT * FROM DEPARTMENTS
        addEmployee();
      }
      if (q1 === "Update an employee role") {
        //TODO: SELECT * FROM DEPARTMENTS
        updateRole();
      }
      if (q1 === "End Program") {
        //TODO: SELECT * FROM DEPARTMENTS
        return;
      }
    });
}

function addDepartment() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Whats the name of the department?",
        name: "department",
      },
    ])
    .then((response) => {
      db.query(
        `INSERT INTO department (name) VALUES ("${response.department}");`,
        (err, roles) => {
          if (err) {
            console.log(err);
          }
          console.log("Successfully added");
          askQuestion();
        }
      );
    });
}

function addRole() {
  db.query(`SELECT * FROM department`, (err, department) => {
    if (err) {
      console.log(err);
    }
    console.table(department);
  });
  inquirer
    .prompt([
      {
        type: "input",
        message: "Whats the title of your role?",
        name: "title",
      },
      {
        type: "input",
        message: "Whats the salary of your role?",
        name: "salary",
      },
      {
        type: "input",
        message: "Whats the department id for your role?",
        name: "department",
      },
    ])
    .then((response) => {
      db.query(
        `INSERT INTO department (title, salary, department_id) VALUES ("${response.title}",${response.salary},${response.department});`,
        (err, roles) => {
          if (err) {
            console.log(err);
          }
          console.log("Successfully added");
          askQuestion();
        }
      );
    });
}
function addEmployee() {
  db.query(`SELECT * FROM role`, (err, role) => {
    if (err) {
      console.log(err);
    }
    console.table(role);
  });
  db.query(`SELECT * FROM employees`, (err, employee) => {
    if (err) {
      console.log(err);
    }
    console.table(employee);
  });
  inquirer
    .prompt([
      {
        type: "input",
        message: "Whats the first name of your employee?",
        name: "firstName",
      },
      {
        type: "input",
        message: "Whats the last name of your employee?",
        name: "lastName",
      },
      {
        type: "input",
        message: "Whats roleId of your Employee?",
        name: "role",
      },
      {
        type: "input",
        message: "If your employee has a manager what is their manager id?",
        name: "manager",
      },
    ])
    .then((response) => {
      db.query(
        `INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ("${response.firstName}","${response.lastName}",${response.role},${response.manager});`,
        (err, roles) => {
          if (err) {
            console.log(err);
          }
          console.log("Successfully added");
          askQuestion();
        }
      );
    });
}
function updateRole() {
  db.query(`SELECT * FROM role`, (err, department) => {
    if (err) {
      console.log(err);
    }
    console.table(department);
  });
  db.query(`SELECT * FROM employees`, (err, department) => {
    if (err) {
      console.log(err);
    }
    console.table(department);
  });
  inquirer
    .prompt([
      {
        type: "input",
        message: "Whats the new role id?",
        name: "role",
      },
      {
        type: "input",
        message: "Whats the id of your employee",
        name: "employee",
      },
    ])
    .then((response) => {
      db.query(
        `UPDATE employees SET role_id = ${response.role} WHERE id = ${response.employee};`,
        (err, roles) => {
          if (err) {
            console.log(err);
          }
          console.log("Successfully updated");
          askQuestion();
        }
      );
    });
}
askQuestion();
