const mysql = require("promise-mysql");;

const dotenv = require("dotenv")
dotenv.config
const connection = mysql.createConnection({
    host: process.env.host || "localhost", // Utiliza el valor de DB_HOST en el archivo .env o usa "localhost" por defecto
    database: process.env.database || "bicicletas", // Utiliza el valor de DB_DATABASE en el archivo .env o usa "bicicletas" por defecto
    user: process.env.user , // Utiliza el valor de DB_USER en el archivo .env o usa "root" por defecto
    password: process.env.password , // Utiliza el valor de DB_PASSWORD en el archivo .env o usa "1234" por defecto

})

const getConnetion =async  ()=> await   connection

module.exports ={
    getConnetion
}