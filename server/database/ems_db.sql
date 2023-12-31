-- User type table
DROP TABLE IF EXISTS roles CASCADE;
CREATE TABLE  roles (
   role_id SERIAL PRIMARY KEY UNIQUE,
   position varchar (255)
);

INSERT INTO roles(position)
VALUES ('admin'),('HR'),('developer');

-- User type table
DROP TABLE IF EXISTS empStatus CASCADE;
CREATE TABLE  empStatus (
   status_id SERIAL PRIMARY KEY UNIQUE,
   status varchar (255)
);

INSERT INTO empStatus(status)
VALUES ('active'),('dismissed'),('resigned'),('retrenched');


-- employee details table
DROP TABLE IF EXISTS employees CASCADE;
CREATE TABLE  employees  (
   emp_id SERIAL PRIMARY KEY UNIQUE,
   email varchar(255) UNIQUE,
   first_name varchar (255),
   last_name varchar (255),
   contactno varchar (15),
   position int,
   emp_status int DEFAULT 1,
   start_date date,
   end_date date,
   removed BOOLEAN DEFAULT false,
   FOREIGN KEY (position) REFERENCES roles(role_id),
   FOREIGN KEY (emp_status) REFERENCES empStatus(status_id)
);


-- admin login details table
DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE  users  (
   id SERIAL PRIMARY KEY UNIQUE,
   email varchar(255),
   password varchar (255)
);

