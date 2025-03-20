import Planta from '../models/plantasdb'

const existenPlantas = async (req, res, next) => {
    try {
        const plantas = await Planta.findAll();

        if (plantas.length === 0) {
            return res.status(400).json({ error: "No existen plantas por el momento" });
        }

        next();
    } catch (error) {
        res.status(500).json({ error: 'Error al verificar las plantas', detalle: error.message });
    }
};

const existePlantaById = async (req, res) => {
    const { idPlanta } = req.params;

    try {
        const planta = await Planta.findOne({ where: { idPlanta } });

        if (!planta) {
            return res.status(404).json({ 
                error: `No se encontró la planta con ID ${idPlanta}` 
            });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al verificar la planta', detalle: error.message });
    }
};

export default { existenPlantas, existePlantaById };
