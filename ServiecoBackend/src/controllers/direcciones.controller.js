import Cliente from '../models/clientedb.js';  
import Direccion from '../models/direcciondb.js';

// Obtener la dirección de un cliente específico
const getDireccionByCliente = async (req, res) => {
    const { codigo } = req.params;  

    try {
        const cliente = await Cliente.findOne({
            where: { codigo },
            include: {
                model: Direccion,
                as: 'Direccion'  // El alias definido en belongsTo
            }
        });

        return res.status(200).json(cliente.Direccion);  // Devuelve solo la dirección asociada
    } catch (error) {
        console.error('Error al obtener la dirección del cliente:', error);
        return res.status(500).json({ error: 'Error en el servidor' });
    }
};

// Crear una nueva direccion
const createDireccion = async (req, res) => {
    try {
        const nuevaDireccion= await Direccion.create(req.body);
        res.status(201).json(nuevaDireccion);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear la direccion', detalle: error.message });
    }
};

const updateDireccionByCliente = async (req, res) => {
    const { codigo } = req.params;  
    const { direccion_fiscalId } = req.body;  // Este es el ID de la dirección que se desea actualizar

    try {
        // Busca el cliente por su código
        const cliente = await Cliente.findOne({
            where: { codigo },
            include: {
                model: Direccion,
                as: 'Direccion'  
            }
        });

        // Verifica si la dirección existe
        const direccion = await Direccion.findByPk(direccion_fiscalId);

        // Actualiza la dirección con los nuevos datos
        const updatedDireccion = await direccion.update(req.body);

        // Devuelve la dirección actualizada
        return res.status(200).json(updatedDireccion);
    } catch (error) {
        console.error('Error al actualizar la dirección del cliente:', error);
        return res.status(500).json({ error: 'Error en el servidor' });
    }
};


export default { getDireccionByCliente, updateDireccionByCliente, createDireccion };

