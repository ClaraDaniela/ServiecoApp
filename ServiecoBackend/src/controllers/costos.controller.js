import Costo from '../models/costodb';

// Crear un nuevo costo
const createCosto = async (req, res) => {
    try {
        const nuevoCosto = await Costo.create(req.body);
        return res.status(201).json(nuevoCosto);
    } catch (error) {
        console.error("Error al crear el costo:", error);
        return res.status(500).json({ error: "Error al crear el costo", detalle: error.message });
    }
};

// Eliminar un costo por ID
const deleteCostoById = async (req, res) => {
    const { idCosto } = req.params;

    try {
        const costo = await Costo.findOne({ where: { idCosto } });

        await costo.destroy();
        return res.status(200).json({ mensaje: `Costo con ID ${idCosto} eliminado con éxito` });
    } catch (error) {
        console.error("Error al eliminar el costo:", error);
        return res.status(500).json({ error: "Error en el servidor", detalle: error.message });
    }
};

// Modificar un costo por ID
const updateCostoById = async (req, res) => {
    const { idCosto } = req.params;

    try {
        const costo = await Costo.findOne({ where: { idCosto } });

        await costo.update(req.body);
        return res.status(200).json({ mensaje: "Costo actualizado con éxito", costo });
    } catch (error) {
        console.error("Error al actualizar el costo:", error);
        return res.status(500).json({ error: "Error en el servidor", detalle: error.message });
    }
};

export default { 
    createCosto, 
    deleteCostoById, 
    updateCostoById 
};
