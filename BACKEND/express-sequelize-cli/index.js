const express = require("express");
const app = express();

const PORT = 2000;

app.listen(PORT, (req,res)=>{
    console.log(`server running and listen port ${PORT}`);
});
