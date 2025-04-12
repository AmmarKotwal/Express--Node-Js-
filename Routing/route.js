let exp = require("express");
let routes = exp.Router()
let func = require("../Functions/logic")

routes.get("/",func.Home);
routes.get("/a",func.About);
routes.get("/c",func.Contact);
routes.get("/s",func.Service);


module.exports = routes