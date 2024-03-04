const  db = require('../../config/db');

let Overview =(user) => {
    create_at = new Date() | any;
    updated_at = new Date() | any;
  };


  Overview.description=(req,result)=>{

    try{
        db.query(`SELECT * FROM users `,(err,res)=>{
           console.log("ressssssssssssssssssss216551",res);
           return result (null,{
            data:res,
            message:"Error Occured"
        })
        })
    } catch(err){
        return result (null,{
            status:0,
            message:"Error Occured"
        })
    }
}

  module.exports=Overview;

