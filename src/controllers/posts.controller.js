const Posts = require('../models/posts.model')

const getAll = async (req, res) => {
    const posts = await Posts.selectAll();
    res.json(posts);
}

const getById = async (req, res) => {
    const { postId } = req.params

    const post = await Posts.selectById(postId);

    if (!post) return res.status(404).json({ message : 'El id del post no existe'})

    res.json(post)
}

const getByAutor = async (req,res, next) => {
    const { autorId } = req.params
    
    const posts = await Posts.selectByAutor(autorId);
    console.log('posts recuperados:', posts)
    console.log(res)

    if (!posts || posts.length === 0) {
        return res.status(404).json({ message: 'No se han encontrado posts con este id de autor' });
    }

    res.json(posts)
}

module.exports = { getAll, getById, getByAutor }