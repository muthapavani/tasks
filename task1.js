var express=require("express")
var app=express()
var mysql=require("mysql2")
var fs=require("fs")
var connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"123456",
    database:"practice"
})
connection.connect((err)=>{
    if(err){
        console.log("err.message")
    }
    else{
        console.log("mysql connected")
    }
})

app.get("/emps",(req,res)=>{
    connection.query("select * from emp",(err,data)=>{
        if(err){
            res.send(err.message)
        }
        else{
           fs.writeFile("./emp.env",JSON.stringify(data),(err)=>{
            if(err){
                res.send(err)
            }
            else{
                res.send("data recieved")
            }
           })
        }
    })
})
app.listen(3301,()=>{
    console.log("server running")
})