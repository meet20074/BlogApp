const mon = require("mongoose");
const likeSchema =  new mon.Schema({

    post :{
        type: mon.Schema.Types.ObjectId,
        ref:"Post",

    },
    user:{

        type:String,
        required:true,
    },
    

})

module.exports = mon.model("Like" ,likeSchema);