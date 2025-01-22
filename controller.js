var model=require("./model.js")
exports.getdata=async(req,res)=>{
    var data= await model.modelget
    console.log(data)
}

exports.postdata=async(req,res)=>{
    console.log(req.body)
    var {s_no, hero_name , film_count, hits}=req.body
    var data1= await model.modelpost
    console.log(data1)
}

exports.updatedata=async(req,res)=>{
    console.log(req.body)
    var {count}=req.body
    var data2= await model.modelupdate
    console.log(data2)  
}

exports.deletedata=async(req,res)=>{
    console.log(req.body)
    var {name}=req.body
    var data3= await model.modeldelete
    console.log(data3)
}

