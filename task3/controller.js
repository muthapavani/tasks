var model=require("./model.js")
exports.getdata=(req,res)=>{
    console.log(model.modelget)
}
exports.postdata=(req,res)=>{
    console.log(req.body)
    var {s_no, hero_name , film_count, hits}=req.body
    console.log(model.modelpost)
}
exports.deletedata=(req,res)=>{
    console.log(req.body)
    var {name}=req.body
    console.log(model.modeldelete)
   
}

