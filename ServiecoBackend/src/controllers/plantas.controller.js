import Planta from '../models/plantasdb';
import Cliente from '../models/clientesdb';

// Obtener todas las plantas de un cliente
const getPlantasByCliente = async (req, res) => {
    const { Cliente_codigo } = req.params;

    try {
        const plantas = await Planta.findAll({ where: { Cliente_codigo } });

        return res.status(200).json(plantas);
    } catch (error) {
        console.error("Error al obtener plantas:", error);
        return res.status(500).json({ error: 'Error en el servidor', detalle: error.message });
    }
};

// Crear una nueva planta
const createPlanta = async (req, res) => {
    try {
        const nuevaPlanta = await Planta.create(req.body);
        return res.status(201).json(nuevaPlanta);
    } catch (error) {
        console.error("Error al crear la planta:", error);
        return res.status(500).json({ error: 'Error al crear la planta', detalle: error.message });
    }
};

// Eliminar una planta por ID
const deletePlantaById = async (req, res) => {
    const { idPlanta } = req.params;

    try {
        const planta = await Planta.findOne({ where: { idPlanta } });

        await planta.destroy();
        return res.status(200).json({ mensaje: `La planta con ID ${idPlanta} fue eliminada con éxito` });
    } catch (error) {
        console.error("Error al eliminar la planta:", error);
        return res.status(500).json({ error: 'Error en el servidor', detalle: error.message });
    }
};

// Actualizar una planta por ID
const updatePlantaById = async (req, res) => {
    const { idPlanta } = req.params;  

    try {
        const planta = await Planta.findOne({ where: { idPlanta } });

        await planta.update(req.body);
        return res.status(200).json({ mensaje: "Planta actualizada con éxito", planta });
    } catch (error) {
        console.error("Error al actualizar la planta:", error);
        return res.status(500).json({ error: 'Error en el servidor', detalle: error.message });
    }
};

export default { 
    getPlantasByCliente, 
    createPlanta, 
    deletePlantaById, 
    updatePlantaById 
};
