const controller = require('../controllers/empresaControllers.js');

// //server.get('/autores', controller.autoresMenu)

server.get('/empresa', controller.empresaGetAll)
server.get('/empresa/:codigo', controller.empresaGetById)

server.put('/empresa/:codigo', controller.empresaEditar)
server.post('/empresa', controller.empresaNovo)

