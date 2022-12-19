import Post from './Post.js';

class PostController {
  async create(req, res) {
    try {
      const {author, title, content, picture} = req.body;
      const post = await Post.create({author, title, content, picture})
      res.json(post)
    } catch (err) {
      res.status(500).json(err)
    }
  }

  async getAll(req, res) {
    try {
      const posts = await Post.find();
      return res.json(posts)
    } catch (err) {
      res.status(500).json(err)
    }
  }

  async getOne(req, res) {
    try {
      const {id} = req.params;
      const post = await Post.findById(id);
      if (!id) {
        res.status(400).json({message: 'Id не указан'})
      }
      return res.json(post)
    } catch (err) {
      res.status(500).json(err)
    }
  }

  async update(req, res) {
    try {
      const post = req.body
      if (!post._id) {
        res.status(400).json({message: 'Id не указан'})        
      }
      const updatedPost = await Post.findByIdAndUpdate(post._id, post, {new: true})
      return res.json(updatedPost)
    } catch (err) {
      res.status(500).json(err)
    }
  }

  async delete(req, res) {
    try {
      const {id} = req.params
      if (!id) {
        res.status(400).json({message: 'Id не указан'})        
      }
      const post = await Post.findByIdAndDelete(id)
      return res.json(post)
    } catch (err) {
      res.status(500).json(err)
    }
  }
}

export default new PostController();