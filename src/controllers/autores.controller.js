const { json } = require('express');
const Autores = require('../models/autores.model')

const getAll = async (req, res) => {
    const autores = await Autores.selectAll();
    
    res.json(autores);
}

const getById = async (req, res) => {
    const { autorId } = req.params;

    const autor = await Autores.selectById(autorId)

    if (!autor) return res.status(404).json({ message : 'El id del autor no existe'})
    
    res.json(autor)
}

const create = async (req, res) => {
    const result = await Autores.insert(req.body);
    const autor = await Autores.selectById(result.insertId)

    res.json(autor);
}

module.exports = { getAll, getById, create }