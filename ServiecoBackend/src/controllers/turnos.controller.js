import Turno from '../models/turnosdb'

const getTurnos = async (req, res) => {
    try {
        const servicios = await Servicio.findAll();
        res.status(200).json(productos);
    } catch (error) {
        console.error("Error al obtener servicios:", error);
        res.status(500).json({ error: "Error al obtener servicios", detalle: error.message });
    }
};

const getTurnoById = async (req, res) => {
    const { idTurno } = req.params;
    
    try {
        const turno = await Turno.findOne({where: { idTurno }});
        
        res.status(200).json(turno);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el turno', detalle: error.message });
    }
};

const createTurno = async (req, res) => {
    try {
        const nuevoTurno = await Turno.create(req.body);
        return res.status(201).json(nuevoTurno);
    } catch (error) {
        console.error("Error al crear el turno:", error);
        return res.status(500).json({ error: "Error al crear el turno", detalle: error.message });
    }
};

const deleteTurno = async (req, res) => {
    const { idTurno } = req.params;

    try {
        const turno = await Turno.findOne({ where: { idTurno } });

        await turno.destroy();
        return res.status(200).json({ 
            mensaje: `El turno con el ID ${idTurno} fue eliminado con éxito` 
        });
    } catch (error) {
        console.error("Error al eliminar el turno:", error);
        return res.status(500).json({ error: "Error al eliminar el turno", detalle: error.message });
    }
};

const updateTurno = async (req, res) => {
    const { idTurno } = req.params;

    try {
        const turno = await Turno.findOne({ where: { idTurno } });

        if (Object.keys(req.body).length === 0) {
            return res.status(400).json({ error: "No se proporcionaron datos para actualizar" });
        }

        await turno.update(req.body);
        return res.status(200).json({ mensaje: "Turno actualizado con éxito", turno });
    } catch (error) {
        console.error("Error al actualizar el turno:", error);
        return res.status(500).json({ error: "Error al actualizar el turno", detalle: error.message });
    }
};

export default {
    getTurnos,
    getTurnoById,
    createTurno,
    deleteTurno,
    updateTurno
}