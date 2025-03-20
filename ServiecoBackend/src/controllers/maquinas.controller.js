import Maquina from '../models/maquinasdb'

const getMaquinas = async (req, res) => {
    try {
        const maquinas = await Maquina.findAll();
        res.status(200).json(maquinas);
    } catch (error) {
        console.error("Error al obtener maquinas:", error);
        res.status(500).json({ error: "Error al obtener maquinas", detalle: error.message });
    }
};

const getMaquinaById = async (req, res) => {
    const { idMaquina } = req.params;
    
    try {
        const maquina = await Maquina.findOne({where: { idMaquina }});

        res.status(200).json(maquina);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener la maquina', detalle: error.message });
    }
};

const createMaquina = async (req, res) => {
    try {
        const nuevaMaquina = await Maquina.create(req.body);
        return res.status(201).json(nuevaMaquina);
    } catch (error) {
        console.error("Error al crear la maquina:", error);
        return res.status(500).json({ error: "Error al crear la maquina", detalle: error.message });
    }
};

// Eliminar maquina
const deleteMaquina = async (req, res) => {
    const { idMaquina } = req.params;

    try {
        const maquina = await Maquina.findOne({ where: { idMaquina } });

        await maquina.destroy();
        return res.status(200).json({ 
            mensaje: `La maquina con el ID ${idMaquina} fue eliminada con éxito` 
        });
    } catch (error) {
        console.error("Error al eliminar la maquina:", error);
        return res.status(500).json({ error: "Error al eliminar la maquina", detalle: error.message });
    }
};

// Actualizar maquina por ID
const updateMaquina = async (req, res) => {
    const { idMaquina } = req.params;

    try {
        const maquina = await Maquina.findOne({ where: { idMaquina } });

        if (Object.keys(req.body).length === 0) {
            return res.status(400).json({ error: "No se proporcionaron datos para actualizar" });
        }

        await maquina.update(req.body);
        return res.status(200).json({ mensaje: "Maquina actualizada con éxito", maquina });
    } catch (error) {
        console.error("Error al actualizar la maquina:", error);
        return res.status(500).json({ error: "Error al actualizar la maquina", detalle: error.message });
    }
};

export default {
    getMaquinas,
    getMaquinaById,
    createMaquina,
    deleteMaquina,
    updateMaquina
}