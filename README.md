# Welcome to FLight Services

## Project Setup

- clone the project on your local machine
- execute `npm install` on the same path as of your root directory of the downloded project
- crete `.env` file on the root directory and add following envorinment variable
     - `PORT=XXXX`
- Inside `src/config` folder make a json file `config.json` and add the following piece of code

```
    "development": {
        "username": <YOUR_DB_LOGIN_NAME>,
        "password": <YOUR_DB_LOGIN_PASSWORD>,
        "database": "Flight_Search_DB_DEV",
        "host": "127.0.0.1",
        "dialect": "mysql"
    },

```