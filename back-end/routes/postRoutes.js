const express = require("express");
const router = express.Router();
const {
  createPost,
  deletePost,
  getAllPosts,
  getPost,
  updatePost,
} = require("../controllers/postControllers");
const { authGuard, adminGuard } = require("../middleware/authMiddleware");

router.route("/").post(authGuard, adminGuard, createPost).get(getAllPosts);
router
  .route("/:slug")
  .put(authGuard, adminGuard, updatePost)
  .delete(authGuard, adminGuard, deletePost)
  .get(getPost);

module.exports = router;
