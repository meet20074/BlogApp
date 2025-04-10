const mon = require("mongoose");

const postSchema = new mon.Schema({
    title:{
        type : String,
        required : true,
    },
    body:{
        type: String,
        required:true,

    },
    likes :[{
        type : mon.Schema.Types.ObjectId,
        ref : "Like",
    }],
    comments:[{
        type : mon.Schema.Types.ObjectId,
        ref : "Comment",
    }],
})

module.exports = mon.model("Post" , postSchema);
