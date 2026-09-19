import { Post } from "../models/post.model.js";

// Create a post

const createPost = async (req, res) => {
  try {
    const { name, description, age } = req.body;

    if (!name || !description || !age) {
      return res.status(400).json({
        message: "All field are required",
      });
    }
      const post = await Post.create({ name, description, age });
      res.status(201).json({
        message: "Post create successfully",
        post,
      });
    
  } catch (error) {
    res.status(500).json({ message: "Interanl Server error", error });
  }
};

const getPosts =  async (req, res) =>{
    try {
        
    } catch (error) {
        
    }
}


export { createPost };
