let exp = require("express");
require("dotenv").config();
let r = require("./Routing/route");
let db = require("./Db")
let collection = require("./collections/User")
let myapp = exp();

myapp.use("/ammar",r);

let sending_data = async function () {
    try{
        collection.create({
            user_name: "Ammar",
            user_email: "ammar@gmail.com",
            user_password: "123456",
            user_age: 22
        })
        console.log("Data Inserted")
    } catch(e) {
        console.log(e)
}
}

db().then(()=>{
    sending_data();
    myapp.listen(process.env.PORT_NO,()=>{
        console.log(`Server Is Running On http://localhost:${process.env.PORT_NO}/ammar`)
    })
}).catch((e)=>{
    console.log(e)
})