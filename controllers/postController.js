
const Post = require("../models/postmodel");

exports.createPost = async (req,res) => {
    try{
        const {title , body} = req.body;
    const post = new Post({title,body});
    const savedPost = await post.save();

    res.json({
        post : savedPost
    })
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            error : "error while creating post"
        })
    }
}

exports.getAllPosts = async (req,res) => {
    try{
         const allposts = await Post.find().populate("comments").exec();

    res.json({
        post : allposts
    })
    }
    catch(error){
        res.status(500).json({
            error : "error while getting all posts"
        })
    }
}