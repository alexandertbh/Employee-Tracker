# Employee Tracker

## Description

If you are an employer that is looking for a way to keep track of your employees, departments, and roles this program allows you to do that using SQL, Javascript, and Node. It also includes information about employees like their salary info as well as an option to update an employee's role as needed. Once everything is installed it is easy to view, add, and edit information from the terminal.

## Installation

First run npm i in the console in order to download and install the necessary dependancies. Then create a .env file and add the following there associated with your sql database.

DB_NAME="employees_db"
DB_ROOT="the level your files live for you. Most of the time its ROOT"
DB_PASSWORD="your SQL Password"

once you have done so log into SQL and populate the schema and seed the tables by running SOURCE ./db/schema.sql from the root level and then running SOURCE ./db/seeds.sql. Once there are done you should be able to run the program simply by exiting sql and running node server.js from the root level.

## Usage

Once you've followed the instructions to install the necessary dependancies run node.server.js from the root level in order to start the program. From here you have can select one of seven actions. You can view all departments, roles, or employees which will show the the table and its contents in the console. You can also add a department, role, or employee which will ask you for the details needed to create a instance of the desired item in the database. You can see it was done successfully by using the appropriate view option as well. Finally you can also update the role of an employee by selecting that option and following the instructions there.

![A screenshot of the application start](./Assets/Screenshot%202023-05-02%20at%207.12.34%20PM.png)
  ![A screenshot the department table](./Assets/Screenshot%202023-05-02%20at%207.12.41%20PM.png)
  ![A screenshot of the employees](./Assets/Screenshot%202023-05-02%20at%207.12.49%20PM.png)
  ![a screenshot of all the tables together](./Assets/Screenshot%202023-05-02%20at%207.13.27%20PM.png)

## Credits

Node.js - https://nodejs.org/en
Inquirer - https://www.npmjs.com/package/inquirer
mySQL - https://www.mysql.com/
dotenv - https://www.npmjs.com/package/dotenv

## License

MIT License

Copyright (c) 2023 Alex Horning

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
