var model=require("./model")
exports.getdata=(req,res)=>{
    console.log(model.modelget)
}
exports.postdata=(req,res)=>{
    console.log(req.body)
    var {s_no, hero_name , film_count, hits}=req.body
    console.log(model.modelpost)
}
exports.updatedata=(req,res)=>{
    console.log(req.body)
    var {count}=req.body
    console.log(model.modelupdate)
   
}
exports.deletedata=(req,res)=>{
    console.log(req.body)
    var {name}=req.body
    console.log(model.modeldelete)
   
}

