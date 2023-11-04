const mysql = require('mysql')
const database = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "laptrip_db"
})

const connectDB = ()=>{
    database.connect((error)=>{
        if (error) {
            console.log("Error connecting")
        }
        else{
            console.log("Successfully connected to database")
        }
    })
}

module.exports = {
    database,
    connectDB
}