import Prestacion_servicios from '../models/prestacion_serviciosdb'

const createPrestacionServicio = async (req, res) => {
    try {
        const nuevaPrestacionServicio = await Prestacion_servicios.create(req.body);
        return res.status(201).json(nuevaPrestacionServicio);
    } catch (error) {
        console.error("Error al crear una nueva prestacion:", error);
        return res.status(500).json({ error: 'Error al crear la prestacion', detalle: error.message });
    }
};

const deletePrestacionById = async (req, res) => {
    const { idPrestacionServicio } = req.params;

    try {
        const prestacion = await Prestacion_servicios.findOne({ where: { idPrestacionServicio } });

        await Prestacion_servicios.destroy();
        return res.status(200).json({ mensaje: `La prestacion de servicio con ID ${idPrestacionServicio} fue eliminada con éxito` });
    } catch (error) {
        console.error("Error al eliminar la prestacion de servicios:", error);
        return res.status(500).json({ error: 'Error en el servidor', detalle: error.message });
    }
};

const updatePrestacionServicioById = async (req, res) => {
    const { idPrestacionServicio } = req.params;  

    try {
        const prestacion = await Prestacion_servicios.findOne({ where: { idPrestacionServicio } });

        await prestacion.update(req.body);
        return res.status(200).json({ mensaje: "Prestacion servicio actualizada con éxito", planta });
    } catch (error) {
        console.error("Error al actualizar la prestacion:", error);
        return res.status(500).json({ error: 'Error en el servidor', detalle: error.message });
    }
};

export default {
    createPrestacionServicio,
    deletePrestacionById,
    updatePrestacionServicioById
}