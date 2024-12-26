# Task Management System

## Overview
The Task Management System is designed to help teams and individuals manage their tasks efficiently. It provides features for creating, updating, and tracking tasks, as well as assigning tasks to team members and setting deadlines.


# Docker DB setUp

- Install Docker in in Ubuntu
- Use Below command
- sudo service docker start
- docker pull mysql
- docker run --name mysql-container -e MYSQL_ROOT_PASSWORD="Password" -p 3306:3306 -d mysql
- docker exec -it mysql-container mysql -u root -p

# DB commands on docker terminal

- create database dbname;
- use dbname;
- create tables using db.sql file
- describe tablename
- exit to exit from mysql

# Use Postman to hit endpoint
