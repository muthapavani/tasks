var connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"123456",
    database:"pavani"
})
connection.connect((err)=>{
    if(err){
        console.log("err.message")
    }
    else{
        console.log("mysql connected")
    }
})

module.exports=connection;