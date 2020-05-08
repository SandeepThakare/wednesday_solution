# How to up the Backend

## Required dependancies
1. nodejs must be installed,
    **link to install :** https://nodejs.org/en/download/
2. mysql must be install locally and service is up
    **link to install :**
        1. For windows: https://dev.mysql.com/downloads/installer/
        2. For Mac and Ubuntu: https://linuxize.com/post/how-to-install-mysql-on-ubuntu-18-04/
3. npm must be install to install node packages 
    **link to install :** https://nodejs.org/en/download/

## Install packages
`npm install`

## Install sequelize cli globally
`npm install -g sequelize-cli`

-----------------------------------------------
# Application Setup
#### Database (MySQL)
1. Configure database connections and dialect by making the required changes in 
    backend/src/data_interaction/internal/config/config.json

2. Make Sure you create database in Mysql db before you run migration, the name should be one you setup in config file

2. Run migrations by running the following commands from application root::

    `cd backend/src/data_interaction/internal`
    
    `npx sequelize-cli db:migrate`

## Run application
    npm start

#### Access application
    localhost:3001/wednesday/api/<controller_path>

-----------------------------------
# Test Cases:
#### To run test cases run the below command

`npm test`

*Note: Please make sure you run all above migrations and create database which you configured in config file*

-----------------------------------
### For detail api description please see attached doc with the email
