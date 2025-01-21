express=require("express")
var connection=require("./database.js")
var app=express();
var router=require("./tasks/user.js")
app.use("/auth",router)

app.get("/",(req,res)=>{
    res.send("hi this is root api")
})
app.listen(3302,()=>{
    console.log("server running")
})