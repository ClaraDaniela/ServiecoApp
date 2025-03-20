import { Router } from 'express';
import clientesController from '../controllers/clientes.controller.js';
import clientesMiddleware from '../middlewares/clientes.middleware.js';
import schemaValidator from '../middlewares/schemaValidator.js';
import clienteSchema from '../schemas/clientes.schema.js'; 

const route = Router();

route.get('/clientes', clientesMiddleware.existenClientes, clientesController.getAllClientes);
route.get('/clientes/:codigo', clientesMiddleware.existeClienteById, clientesController.getClienteById);
route.post('/clientes', schemaValidator(clienteSchema), clientesController.createCliente);
route.delete('/clientes/:codigo', clientesMiddleware.existeClienteById, clientesController.deleteClienteById);

export default route;