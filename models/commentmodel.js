const mon = require("mongoose");
const commentSchema =  new mon.Schema({

    post :{
        type: mon.Schema.Types.ObjectId,
        ref:"Post",

    },
    user:{

        type:String,
        required:true,
    },
    body:{
        type:String,
        required:true,
    }

})

module.exports = mon.model("Comment" ,commentSchema);