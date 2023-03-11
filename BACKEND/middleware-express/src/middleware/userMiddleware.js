const validation=(req,res,next)=>{
    console.log('before');
    next()
    console.log('after');
}

const validation1=(req,res,next)=>{
    console.log('before1');
    next()
    console.log('after1');
}

module.exports={validation,validation1}