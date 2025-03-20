import { Router } from 'express';
import contactosController from '../controllers/contactos.controller.js';
import contactosMiddleware from '../middlewares/contactos.middleware.js';
import schemaValidator from '../middlewares/schemaValidator.js';
import contactoSchema from '../schemas/contactos.schema.js'; 

const route = Router();

route.get('/contactos', contactosMiddleware.existenContactos, contactosController.getContactoByPlanta);
route.patch('/contacto', schemaValidator(contactoSchema), contactosController.updateContacto.getContactoByPlanta);
route.post('/contacto', schemaValidator(contactoSchema), contactosController.createContacto);
route.delete('/contacto/:apellido/:nombre/:Planta_idPlanta', contactosMiddleware.existeContactoByPKs, contactosController.deleteContacto);

export default route;