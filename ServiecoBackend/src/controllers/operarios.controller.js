import Operario from '../models/operariosdb'

const getOperarios = async (req, res) => {
    try {
        const operarios = await Operario.findAll();
        res.status(200).json(operarios);
    } catch (error) {
        console.error("Error al obtener operarios:", error);
        res.status(500).json({ error: "Error al obtener operarios", detalle: error.message });
    }
};

const getOperarioById = async (req, res) => {
    const { idOperario } = req.params;
    
    try {
        const operario = await Operario.findOne({where: { idOperario }});

        res.status(200).json(operario);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el operario', detalle: error.message });
    }
};

const createOperario = async (req, res) => {
    try {
        const nuevoOperario = await Operario.create(req.body);
        return res.status(201).json(nuevoOperario);
    } catch (error) {
        console.error("Error al crear el operario:", error);
        return res.status(500).json({ error: "Error al crear el operario", detalle: error.message });
    }
};

const deleteOperario = async (req, res) => {
    const { idOperario } = req.params;

    try {
        const operario = await Operario.findOne({ where: { idOperario } });

        await operario.destroy();
        return res.status(200).json({ 
            mensaje: `El operario con el ID ${idOperario} fue eliminada con éxito` 
        });
    } catch (error) {
        console.error("Error al eliminar el operario:", error);
        return res.status(500).json({ error: "Error al eliminar el operario", detalle: error.message });
    }
};

const updateOperario = async (req, res) => {
    const { idOperario } = req.params;

    try {
        const operario = await Operario.findOne({ where: { idOperario } });

        if (Object.keys(req.body).length === 0) {
            return res.status(400).json({ error: "No se proporcionaron datos para actualizar" });
        }

        await operario.update(req.body);
        return res.status(200).json({ mensaje: "Operario actualizado con éxito", operario });
    } catch (error) {
        console.error("Error al actualizar el operario:", error);
        return res.status(500).json({ error: "Error al actualizar el operario", detalle: error.message });
    }
};

export default {
    getOperarios,
    getOperarioById,
    createOperario,
    deleteOperario,
    updateOperario
}