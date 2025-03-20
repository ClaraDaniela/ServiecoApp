import Servicio from '../models/serviciosdb'

const getServicios = async (req, res) => {
    try {
        const servicios = await Servicio.findAll();
        res.status(200).json(productos);
    } catch (error) {
        console.error("Error al obtener servicios:", error);
        res.status(500).json({ error: "Error al obtener servicios", detalle: error.message });
    }
};

const getServicioById = async (req, res) => {
    const { idServicio } = req.params;
    
    try {
        const servicio = await Servicio.findOne({where: { idServicio }});
 
        res.status(200).json(servicio);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el servicio', detalle: error.message });
    }
};

const createServicio = async (req, res) => {
    try {
        const nuevoServicio = await Servicio.create(req.body);
        return res.status(201).json(nuevoServicio);
    } catch (error) {
        console.error("Error al crear el servicio:", error);
        return res.status(500).json({ error: "Error al crear el servicio", detalle: error.message });
    }
};

const deleteServicio = async (req, res) => {
    const { idServicio } = req.params;

    try {
        const servicio = await Servicio.findOne({ where: { idProducto } });

        await servicio.destroy();
        return res.status(200).json({ 
            mensaje: `El servicio con el ID ${idServicio} fue eliminado con éxito` 
        });
    } catch (error) {
        console.error("Error al eliminar el servicio:", error);
        return res.status(500).json({ error: "Error al eliminar el servicio", detalle: error.message });
    }
};

const updateServicio = async (req, res) => {
    const { idServicio } = req.params;

    try {
        const servicio = await Servicio.findOne({ where: { idServicio } });

        if (Object.keys(req.body).length === 0) {
            return res.status(400).json({ error: "No se proporcionaron datos para actualizar" });
        }

        await servicio.update(req.body);
        return res.status(200).json({ mensaje: "Servicio actualizado con éxito", servicio });
    } catch (error) {
        console.error("Error al actualizar el servicio:", error);
        return res.status(500).json({ error: "Error al actualizar el servicio", detalle: error.message });
    }
};

export default {
    getServicios,
    getServicioById,
    createServicio,
    deleteServicio,
    updateServicio
}