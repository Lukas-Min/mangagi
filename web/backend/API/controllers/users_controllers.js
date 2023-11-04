const con_db = require('../models/con_db')

const register = (req, res, next)=>{
    let firstName = req.body.first_name
    let lastName = req.body.last_name
    let userName = req.body.username
    let password = req.body.password


    let User = {
        first_name: firstName,
        last_name: lastName,
        username: userName,
        password: password
    }

    let query = `INSERT INTO users_tbl SET ?`

    con_db.database.query(query, User, (error, rows, result)=>{
        if(error){
            res.status(500).json({
                successful: false,
                message: "Error in query"
            })
        }
        else{
            res.status(200).json({
                successful: true,
                message: "Successfully registered a user!"
            })
        }
    })

}

module.exports = {
    register
}