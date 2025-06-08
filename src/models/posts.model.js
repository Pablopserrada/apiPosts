const db = require('../config/db')

const selectAll = async () => {
    const [result] = await db.query(`
        SELECT a.idposts,
            a.titulo,
            a.descripcion,
            a.fecha_creacion,
            a.categoria,
            a.idautor, 
            b.nombre as nombre_autor, 
            b.email as email_autor, 
            b.imagen
        FROM posts a
        JOIN mydb.autores b ON a.idautor = b.idautores`)
    return result;
}

const selectById = async (postId) => {
    const [result] = await db.query(`
        SELECT a.idposts,
            a.titulo,
            a.descripcion,
            a.fecha_creacion,
            a.categoria,
            a.idautor,
            b.nombre as nombre_autor,
            b.email as email_autor, 
            b.imagen
        FROM posts a
        JOIN mydb.autores b ON a.idautor = b.idautores
        WHERE idposts = ?`, [postId]);
    if (result.length === 0) return null;
    return result[0];
}

const selectByAutor = async (autorId) => {
    const [result] = await db.query(`
        SELECT a.idposts,
            a.titulo,
            a.descripcion,
            a.fecha_creacion,
            a.categoria,
            a.idautor,
            b.nombre as nombre_autor,
            b.email as email_autor, 
            b.imagen
        FROM posts a
        JOIN mydb.autores b ON a.idautor = b.idautores
        WHERE idautor = ? 
        `, [autorId])
    if (result.length === 0) return null;
    return result;
}

const insert = async ({ titulo, descripcion, categoria, idautor }) => {

   const [result] = await db.query(`INSERT INTO posts ( titulo, descripcion, fecha_creacion, categoria, idautor) VALUES (?,?,?,?,?)`, [titulo, descripcion, new Date(), categoria, idautor]);
   return result;
}

module.exports = {
    selectAll, selectById, selectByAutor, insert
}