const mon = require("mongoose");
require("dotenv").config();
const dbConnect = () => {
   mon.connect( process.env.Database_url , {
    useNewUrlParser : true,
    useUnifiedTopology: true
   }).then( () =>{
    console.log("Database connected successfully");
   }).catch((error) =>{
    console.log("error in connection");
   })
}

module.exports = dbConnect;