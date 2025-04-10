const express = require("express");
const router = express.Router();

const dummycontroller = require("../controllers/dummycontroller");
const { createComment } = require("../controllers/commentController");
const { createPost, getAllPosts } = require("../controllers/postController");
const { createLike, createUnlike } = require("../controllers/likeController");

router.get("/dummy", dummycontroller);
router.post("/createComment", createComment);
router.post("/createPost", createPost);
router.get("/getAllPosts", getAllPosts);
router.post("/createLike", createLike);
router.post("/createUnlike" , createUnlike);

module.exports = router;
