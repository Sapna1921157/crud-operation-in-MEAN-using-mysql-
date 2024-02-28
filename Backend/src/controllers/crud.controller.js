const Overview = require ('../models/crud.model');

exports.description = (req,res) => {
    Overview.description(req,(err,data)=> {
        if(err){
            res.send(err)
        }else{
            res.send(data)
        }
    })
}