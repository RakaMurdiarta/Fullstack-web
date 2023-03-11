const express = require("express");
const app = express();
const userRoute=require('./routes/users')
const userGetRoute=require('./routes/getuser')
const middleware=require('./middleware/userMiddleware')

const bodyUrl=require('body-parser')

app.use(bodyUrl.urlencoded({extended:false}))

app.use(middleware.validation1)

app.use('/admin',userRoute)
app.use('/users',userGetRoute)


app.listen(8000,()=>{
    console.log('listening port 8000');
})

