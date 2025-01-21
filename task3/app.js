express=require("express")
var app=express();
var router=require("/data.js")
app.use(express.urlencoded({extends:true}))
app.use("/auth",router)

app.get("/",(req,res)=>{
    res.send("hi this is root api")
})
app.listen(3303,()=>{
    console.log("server running")
})