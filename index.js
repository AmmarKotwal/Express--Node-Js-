let exp = require("express");
require("dotenv").config();
let myapp = exp();
let r = require("./Routing/route");

myapp.use("/",r)
myapp.listen(process.env.PORT_NO,()=>{
    console.log(`Server Is Running On http://localhost:${process.env.PORT_NO}`)
})