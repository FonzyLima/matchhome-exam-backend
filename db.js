const sqlite = require("sqlite3").verbose()
const dbName = "myDatabase.db"

let db = new sqlite.Database(dbName,(err)=>{
    if(err){
        console.log(err.message)
    }
    else{
        console.log("Connected")
        db.run('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, fName TEXT, lName TEXT, pass TEXT,confPass TEXT)', (err)=>{
            if(err){
                console.log(err.message)
            }
            else{
                console.log("Table exist")
            }
        })
    }
})

module.exports = db