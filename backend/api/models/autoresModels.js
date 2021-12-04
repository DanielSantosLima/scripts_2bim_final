// const conexao = require('../../config/conexao.js');

// module.exports = {
//     getAllAutores,
//     getByIdAutores,
//     ativarInativar,
//     editarAutores,
//     novoAutor            
// }

// function empresaGetAll (callback) {
//     conexao.query('select * from autores', callback)
// }

// function empresaGetById (id, callback) {
//     conexao.query('select * from autores WHERE aut_codigo = ' + id, callback)
// }

// function ativarInativar (id, ativo, callback) {
//     console.log('Autores Ativando/Inativando Registro ' + id + " - Status: " + ativo)

//     const m_sql = "update autores set aut_ativoinativo = '" + ativo + "' where aut_codigo = '" + id + "'";

//     conexao.query( m_sql, callback );

//     console.log('Retornando { M O D E L } Autores Ativando/Inativando Registro ' + id + " - Status: " + ativo)

    
// }

// function novoAutor(dados, callback) {
//     var msql = 'INSERT INTO autores SET ? ';

// 	conexao.query(msql, dados, callback);
// }

// function empresaEditar(dados, callback) {
//     console.log('Estou alterando o autores { M O D E L } .......' + dados);

//     var msql = "UPDATE autores SET aut_nome = '" + dados.aut_nome + 
//     "' , aut_ativoinativo = '" + dados.aut_ativoinativo +     
//     "' , aut_apelido      = '" + dados.aut_apelido + 
//     "' , aut_sexo         = '" + dados.aut_sexo + 
//     "' , aut_telefone     = '" + dados.aut_telefone + 
//     "' , aut_email        = '" + dados.aut_email + 
//     "'  WHERE aut_codigo  = '" + dados.aut_codigo + "'";

//     console.log(msql);
    
//     conexao.query(msql, callback);
// }

