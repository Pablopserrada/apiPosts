const db = require('../config/db')

const selectAll = async () => {
    const [result] = await db.query('SELECT * FROM autores');
    return result;
}

const selectById = async (autorId) => {
    const [result] = await db.query('SELECT * FROM autores WHERE idautores = ?', [autorId]);
    if (result.length === 0) return null;
    return result[0];
}

module.exports = {
    selectAll, selectById
}