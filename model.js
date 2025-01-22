var connection=require("./database")
exports.modelget=()=>{
    return new Promise((res,rej)=>{
    connection.query("select * from hero_films",(err,data)=>{
    if(err){
        rej(err)
    }
    else{
        res(data)
    }
})
})
}

exports.mpdelpost=()=>{
return new Promise((res,rej)=>{
    connection.query("insert into hero_films(s_no, hero_name , film_count, hits) values(?,?,?,?)",[s_no, hero_name , film_count, hits],(err,data)=>{
    if(err){
        rej(err)
    }
    else{
        res(data)
    }
})
})
}
exports.modelupdate=()=>{
    return new Promise((res,rej)=>{
        connection.query("update hero_films SET film_count=? where hero_name=prabhas ",[count],(err,data)=>{
    if(err){
        rej(err)
    }
    else{
        res(data)
    }
})
})
}
exports.modeldelete=()=>{
    return new Promise((res,rej)=>{
        connection.query("delete from hero_films where hero_name=?",[name],(err,data)=>{
    if(err){
        rej(err)
    }
    else{
        res(data)
    }
})
})
}