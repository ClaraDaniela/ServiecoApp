import { Router } from 'express';
import turnosController from '../controllers/turnos.controller.js';
import validateClienteAndDireccion from '../middlewares/validateDireccion.middleware.js';

const router = Router();

// Obtener la dirección de un cliente específico
router.get('/clientes/:codigo/direccion', validateClienteAndDireccion, clienteController.getDireccionByCliente);

// Crear una nueva dirección
router.post('/direcciones', clienteController.createDireccion);

// Actualizar la dirección de un cliente
router.put('/clientes/:codigo/direccion', validateClienteAndDireccion, clienteController.updateDireccionByCliente);

export default router;
