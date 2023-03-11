const getAllUser=(req,res)=>{
    res.json({
        message:'Get All User Success'
    })
}
const postUser=(req,res)=>{
    res.send(req.params.id)
}

module.exports={getAllUser,postUser}