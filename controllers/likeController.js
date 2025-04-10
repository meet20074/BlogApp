const Like = require("../models/likemodel");
const Post = require("../models/postmodel");

exports.createLike = async (req,res) => {
    try{
        const {post,user} = req.body;
     const like = new Like ({post,user});
     const savedLike = await like.save();

     const updatedPost = await Post.findByIdAndUpdate(post , {$push : {likes : savedLike._id}} , {new : true})
     .populate("likes").exec();

     res.json({
        post : updatedPost
     })

    }
    catch(err){
        console.log(err);
        res.status(500).json({
            err : "error while liking post"
        })

    }
}

exports.createUnlike = async (req,res) => {
    try{

        const {post,like_id} = req.body;
        const updatedPost = await Post.findByIdAndUpdate(post , {$pull : {likes : like_id}}, {new :true})
        res.json({
            post : updatedPost
        })

    }
    catch(err){
        console.log(err);
        res.status(500).json({
            err : "error while unliking post"
        })

    }
}