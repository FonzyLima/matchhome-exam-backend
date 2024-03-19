const db = require('./db')

const readUsers = (callback)=>{
    const sql = `SELECT * FROM users`;
    db.all(sql,[],callback)
}

module.exports = {readUsers}