let db = require('./db.js');

module.exports.handleSingup = (email, password) => {
    //Check if email already exist 
    //Save the user to the database
    //Send the welcome email
    db.saveUser({
        email,
        password
    })
}