import Metrica_precios from '../models/Metrica_preciosdb';

const createMetrica = async (req, res) => {
    try {
        const nuevaMetrica = await Metrica_precios.create(req.body);
        return res.status(201).json(nuevaMetrica);
    } catch (error) {
        console.error("Error al crear la metrica de precios:", error);
        return res.status(500).json({ error: "Error al crear la metrica de precios", detalle: error.message });
    }
};

const deleteMetrica = async (req, res) => {
    const { idMetrica } = req.params;

    try {
        const metrica = await Metrica_precios.findOne({ where: { idMetrica } });

        await metrica.destroy();
        return res.status(200).json({ 
            mensaje: `La metrica con el ID ${idMetrica} fue eliminado con éxito` 
        });
    } catch (error) {
        console.error("Error al eliminar la metrica:", error);
        return res.status(500).json({ error: "Error al eliminar la metrica", detalle: error.message });
    }
};

const updateMetrica = async (req, res) => {
    const { idMetrica } = req.params;

    try {
        const metrica = await Metrica_precios.findOne({ where: { idMetrica } });

        if (Object.keys(req.body).length === 0) {
            return res.status(400).json({ error: "No se proporcionaron datos para actualizar" });
        }

        await metrica.update(req.body);
        return res.status(200).json({ mensaje: "Metrica de precios actualizada con éxito", metrica });
    } catch (error) {
        console.error("Error al actualizar la metrica de precios:", error);
        return res.status(500).json({ error: "Error al actualizar la metrica", detalle: error.message });
    }
};

export default {
    createMetrica,
    deleteMetrica,
    updateMetrica
};