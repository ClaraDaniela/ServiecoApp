import { Router } from 'express';
import plantasController from '../controllers/plantas.controller.js';
import plantasMiddleware from '../middlewares/plantas.middleware.js';
import schemaValidator from '../middlewares/schemaValidator.js';
import plantasSchema from '../schemas/plantas.schema.js'; 

const route = Router();

route.get('/contactos', contactosMiddleware.existenContactos, contactosController.getContactoByPlanta);
route.patch('/contacto', schemaValidator(contactoSchema), contactosController.updateContacto.getContactoByPlanta);
route.post('/contacto', schemaValidator(contactoSchema), contactosController.createContacto);
route.delete('/contacto/:', contactosMiddleware.existeContactoByPKs, contactosController.deleteContacto);

export default route;
