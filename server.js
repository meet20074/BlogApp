const express = require("express");
const app = express();

require("dotenv").config();

const port = process.env.PORT || 4000;
app.use(express.json());

const blog = require("./routes/blog");
app.use("/api/v1" , blog);

const dbConnect = require("./config/database");
dbConnect();


app.get("/" , (req,res)=>{
    res.send("welcome to my blog");

})

app.listen( port , ()=>{
    console.log(`server is running successfully at port ${port}`);
})


