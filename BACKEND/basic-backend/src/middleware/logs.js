const logReq=(req,res,next)=>{
    console.log('validation');
    next()
}

module.exports={logReq}
