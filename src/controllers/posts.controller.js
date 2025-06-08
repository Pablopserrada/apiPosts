const Posts = require('../models/posts.model')
const Autores = require('../models/autores.model')

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

const getByAutor = async (req,res) => {
    const { autorId } = req.params
    
    const posts = await Posts.selectByAutor(autorId);
    console.log('posts recuperados:', posts)
    console.log(res)

    if (!posts || posts.length === 0) {
        return res.status(404).json({ message: 'No se han encontrado posts con este id de autor' });
    }

    res.json(posts)
}

const create = async (req, res) => {
    const { idautor } = req.body

    const autor = await Autores.selectById(idautor)
    if (!autor) {
        return res.status(400).json({ message: 'El id del autor no existe' });
    }

    const result = await Posts.insert(req.body);
    const post = await Posts.selectById(result.insertId);
    res.json(post);
}

module.exports = { getAll, getById, getByAutor, create }