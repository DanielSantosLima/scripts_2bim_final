const controller = require('../controllers/contaPagarController.js');

// //server.get('/autores', controller.autoresMenu)

server.get('/contaPagar', controller.contaPagarGetAll)
server.get('/contaPagar/:codigo', controller.contaPagarGetById)

server.put('/contaPagar/:codigo', controller.contaPagarEditar)
server.post('/contaPagar', controller.contaPagarNovo)

