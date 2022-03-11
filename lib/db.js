let mysql = require('mysql');
let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    // pasword: "",
    database: "nodejs_crud_db"
})

connection.connect((error) =>{
    if(!!error){
        console.log('error');

    }else{
        console.log('Connection...');    
    }

})

module.exports = connection;