var connection=require("./database")
exports.modelget=connection.query("select * from hero_films",(err,data)=>{
    if(err){
        res.send(err)
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

exports.mpdelpost=connection.query("insert into hero_films(s_no, hero_name , film_count, hits) values(?,?,?,?)",[s_no, hero_name , film_count, hits],(err,data)=>{
    if(err){
        res.send(err)
    }
    else{
        res.send(data)
    }
})

exports.modeldelete= connection.query("delete from hero_films where hero_name=?",[name],(err,data)=>{
    if(err){
        res.send(err)
    }
    else{
        res.send(data)
    }
})