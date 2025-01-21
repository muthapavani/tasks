var express=require("express")
const { data } = require("./controller")
var router=expree.Router()
app.use(express.json())
router.get("/data", data.getdata) 
router.post("/send", data.postdata)
router.delete("/delete", data.deletedata) 

module.exports=router;