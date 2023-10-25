-- User type table
DROP TABLE IF EXISTS roles CASCADE;
CREATE TABLE  roles (
   role_id SERIAL PRIMARY KEY UNIQUE,
   name varchar (255)
);

INSERT INTO roles(name)
VALUES ('admin'),('management'),('technical coordinator'),('senior team leader'),('junior team leader');

-- User type table
DROP TABLE IF EXISTS empStatus CASCADE;
CREATE TABLE  empStatus (
   status_id SERIAL PRIMARY KEY UNIQUE,
   name varchar (255)
);

INSERT INTO empStatus(name)
VALUES ('active'),('dismissed'),('resigned'),('retrenched');


-- employee personal details table
DROP TABLE IF EXISTS employees CASCADE;
CREATE TABLE  employees  (
   emp_id SERIAL PRIMARY KEY UNIQUE,
   email varchar(255) UNIQUE,
   first_name varchar (255),
   last_name varchar (255),
   contactNo varchar (15),
   photo varchar (255)
  );


-- employement details table
DROP TABLE IF EXISTS employement CASCADE;
CREATE TABLE  employement  (
   ment_id SERIAL PRIMARY KEY UNIQUE,
   employee varchar (255),
   emp_role varchar (255),
   emp_status varchar (255),
   start_date varchar (255),
   end_date varchar (255),
   FOREIGN KEY (employee) REFERENCES employee(emp_id),
   FOREIGN KEY (emp_role) REFERENCES roles(role_id),
   FOREIGN KEY (emp_status) REFERENCES empStatus(status_id)
);