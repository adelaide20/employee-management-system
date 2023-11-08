# employee-management-system
RESTful API with Node.js, Express, and PostgreSQL

### STARTING THE SERVER
npm run app

### CONNECTING TO THE LOCAL DATABASE
# 1. Open up the Terminal and install postgresql with brew:1.1 brew install postgresql
1.2 brew services start postgresql
# 2. To connect to the database
2.1 psql postgres
2.3 CREATE DATABASE ems;
2.2 \c ems
# 3. Run the script to create tables
3.1 \i /server/database/ems_db.sql OR copy the db file path


### TO TEST THE ROUTES
open REST.http file


### ADMIN LOGIN DETAILS
email: admin@shaper.co.za,
password: admin123


### STARTING THE SERVER
ng serve -o