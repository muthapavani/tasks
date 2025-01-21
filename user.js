var express=require("express")
const connection = require("../database")
const { updatedata } = require("../controller")
var router=expree.Router()
app.use(express.json())
router.get("/data", updatedata.getdata) 
router.post("/send", updatedata.postdata)

router.put("/update", updatedata.updatedata) 
router.delete("/delete", updatedata.deletedata) 

module.exports=router;


