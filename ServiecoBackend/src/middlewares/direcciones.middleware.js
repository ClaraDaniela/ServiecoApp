import Direccion from '../models/direcciondb.js';
import clienteMiddleware from './clientes.middleware.js';

const validateClienteAndDireccion = async (req, res, next) => {
    const { direccion_fiscalId } = req.body; // ID de la dirección a actualizar

    try {
        // Primero, verificamos si el cliente existe usando el middleware ya creado
        await clienteMiddleware.existeClienteById(req, res, async () => {
            // Si no se proporciona una dirección, pasamos al siguiente middleware
            if (!direccion_fiscalId) {
                return next();
            }

            // Buscar la dirección por su ID
            const direccion = await Direccion.findByPk(direccion_fiscalId);

            if (!direccion) {
                return res.status(404).json({
                    error: `Dirección con ID ${direccion_fiscalId} no encontrada`
                });
            }

            // Pasamos al siguiente middleware/controlador
            next();
        });
    } catch (error) {
        console.error('Error al validar cliente y dirección:', error);
        return res.status(500).json({ error: 'Error en el servidor al validar el cliente o la dirección' });
    }
};

export default validateClienteAndDireccion;

