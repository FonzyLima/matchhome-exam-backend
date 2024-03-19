const db = require('./db')

const createUser = (fName,lName,pass,confPass,callback)=>{
    const sql = `INSERT INTO users (fName,lName,pass,confPass) VALUES (?,?,?,?)`
    db.run(sql,[fName,lName,pass,confPass],function(err){
        callback(err,{id: this.lastID})
    })
}

module.exports = {createUser}