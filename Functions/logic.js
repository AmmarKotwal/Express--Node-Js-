let all_func = {

     Home : async function (req,res) {
        res.send("Home Page");
        res.end();
    },
    
     About : async function (req,res) {
        res.send("About Page");
        res.end();
    },
    
     Contact : async function (req,res) {
        res.send("Contact Page");
        res.end();
    },
    
     Service : async function (req,res) {
        res.send("Service Page");
        res.end();
    },
}

module.exports = all_func;