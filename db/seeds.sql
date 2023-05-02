INSERT INTO department (name)
VALUES ("Sales"), ("Recruiting"), ("Engineering"), ("Marketing"), ("Operations");

INSERT INTO
    role (title, salary, department_id)
VALUES ("Account Executive", 100000, 1), (
        "Business Development Manager",
        80000,
        1
    ), (
        "Solution Specialist",
        80000,
        1
    ), (
        "Sourcing Specialist",
        90000,
        2
    ), ("Recruiter", 100000, 2), (
        "Software Development Engineer",
        150000,
        3
    ), (
        "Software Development Manager",
        200000,
        3
    ), ("Quality Assurance", 90000, 3), (
        "Marketing Specialist",
        70000,
        4
    ), ("Marketing Designer", 90000, 4), (
        "Operations Program Manager",
        120000,
        5
    ), (
        "Operations Support Specialist",
        90000,
        5
    ), ("Manager", 200000, 5);

INSERT INTO
    employees (
        first_name,
        last_name,
        role_id,
        manager_id
    )
VALUES ("Alex", "Horning", 13, 1), ("Derek", "Chilson", 6, 1), ("Tamy", "Wilson", 9, 1), ("James", "Kennedy", 1, 1), ("Lizzy", "Nelson", 11, 1);

SELECT * FROM department;

SELECT * FROM role;

SELECT * FROM employees;