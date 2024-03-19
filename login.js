const db = require('./db')

const loginUser = (fName,lName,pass,callback)=>{
    const sql = `SELECT * FROM users WHERE fname = ? AND lname = ? AND pass = ?`
    db.get(sql, [fName, lName, pass], function(err, row) {
        if (err) {
            callback(err);
        } else if (!row) {
            callback(new Error('Invalid login credentials'));
        } else {
            callback(null, { id: row.id }); 
        }
    });
}

module.exports = {loginUser}