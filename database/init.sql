CREATE DATABASE IF NOT EXISTS employee_management;

USE employee_management;

CREATE TABLE IF NOT EXISTS employees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    department VARCHAR(100) NOT NULL,
    location VARCHAR(100) NOT NULL
);

INSERT INTO employees (name, department, location)
VALUES
('Manish', 'DevOps', 'Bangalore'),
('Rahul', 'Networking', 'Hyderabad'),
('Priya', 'Cloud', 'Pune');