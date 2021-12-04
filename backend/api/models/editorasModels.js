const conexao = require('../../config/conexao.js');

module.exports = {
    getAllEditoras,
    getByIdEditoras,
    ativarInativar        
}

function getAllEditoras (callback) {
    conexao.query('select * from editoras', callback)
}

function getByIdEditoras (id, callback) {
    conexao.query('select * from editoras WHERE edt_codigo = ' + id, callback)
}

function ativarInativar (id, ativo, callback) {
    console.log('Editoras Ativando/Inativando Registro ' + id + " - Status: " + ativo)

    const m_sql = "update editoras set edt_ativoinativo = '" + ativo + "' where edt_codigo = '" + id + "'";

    conexao.query( m_sql, callback );

    console.log('Retornando { M O D E L } Editoras Ativando/Inativando Registro ' + id + " - Status: " + ativo)
    
}

