## Install packages
`npm install`

## Application Setup
#### Database (MySQL)
1. Configure database connections and dialect by making the required changes in 
    src/data_interaction/internal/config/config.json

2. Run migrations by running the following commands from application root::

    `cd src/data_interaction/internal`
    
    `npm sequelize-cli db:migrate`

## Run application
    npm start

#### Access application
    localhost:3001/sehatek/api/<controller_path>
