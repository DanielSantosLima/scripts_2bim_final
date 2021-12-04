// const models = require('../models/autoresModels.js');
const conexao = require('../../config/conexao.js');

module.exports = {
    //    autoresMenu,
    empresaGetAll,
    empresaGetById,
    empresaNovo,
    empresaEditar,
}


function empresaGetAll(req, res) {
    console.log('Listar Empresas {M O D E L}');

    const sql = `select * from empresa`

    conexao.query(sql, (err, resposta) => {
        if (err) {
            throw err;
        } else {
            res.json(resposta);
        }
    })
}

function empresaGetById(req, res) {
    const id = req.params.codigo
    console.log('Parametro Esperado Get: ' + id);
    
    const sql = `select * from empresa where emp_codigo = ?`

    conexao.query(sql, [id], (err, resposta) => {
        if (err) {
            throw err;
        } else {
            res.json(resposta);
        }
    })
}
 

// function autoresAtivoInativo(req, res) {
//     const id = req.params.codigo
//     res.json('Ativar/Inativar Autores { M O D E L }')
//     console.log('Ativar/Inativar Autores { M O D E L }')
//     console.log('Parametro Esperado A-I: ' + id);

//     models.getByIdAutores(id, function (err, resposta) {
//         console.log('Retorno de Autores Id {M O D E L}', resposta)
//         let p_ativo = resposta[0].aut_ativoinativo
//         if (err) {
//             throw err;
//         } else {
//             if (p_ativo == 'A') {
//                 p_ativo = 'I'
//             } else {
//                 p_ativo = 'A'
//             }
//         }
//         console.log('A/I: ' + p_ativo);
//         models.ativarInativar(id, p_ativo, function (err, result) {
//             if (err) {
//                 throw err
//             }
//             console.log("Registro Atualizado!!!")
//             //            res.redirect('/autores/consultar/' + id);
//         })
//     })
// }


function empresaNovo(req, res) {
    var dados = req.body;
    console.log("Gravando Novo Registro de Empresa...");
    console.log(req.body);
    dados.emp_codigo = null;
    console.log("Inserindo novo registro de Empresa...");
   
    const sql = `insert into empresa set ?`
    conexao.query(sql, dados, (err, resposta) => {
        if (err) {
            throw err;
        }
        res.send(resposta)
    })

    
}


function empresaEditar(req, res) {
    var dados = req.body;
    console.log(dados);

    console.log(dados);
    console.log("Alterando Registro de Autores...",dados);

    const sql = `update empresa set 
    emp_nome = '${dados.emp_nome}',
    emp_fantasia = '${dados.emp_fantasia}',
    emp_telefone = '${dados.emp_telefone}',
    emp_funcacao = ${dados.emp_funcacao}
    where emp_codigo = ${dados.emp_codigo}
    `
    conexao.query(sql, (err, resposta) => {
        if (err) {
            throw err;
        }
        res.send(resposta)
    })
}


