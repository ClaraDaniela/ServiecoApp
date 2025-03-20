import Tipo_servicio from '../models/tipos_serviciosdb'

const getTipoServicios = async (req, res) => {
    try {
        const tiposServicios = await Tipo_servicio.findAll();
        res.status(200).json(tiposServicios);
    } catch (error) {
        console.error("Error al obtener los tipos de servicios:", error);
        res.status(500).json({ error: "Error al obtener tipos de servicios", detalle: error.message });
    }
};

const getTipoServicioById = async (req, res) => {
    const { idTipoServicio } = req.params;
    
    try {
        const tipoServicio = await Tipo_servicio.findOne({where: { idTipoServicio }});
        
        res.status(200).json(tipoServicio);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el tipo de servicio', detalle: error.message });
    }
};

const createTipoServicio = async (req, res) => {
    try {
        const nuevoTipoServicio = await Tipo_servicio.create(req.body);
        return res.status(201).json(nuevoTipoServicio);
    } catch (error) {
        console.error("Error al crear el servicio:", error);
        return res.status(500).json({ error: "Error al crear el servicio", detalle: error.message });
    }
};

const deleteTipoServicio = async (req, res) => {
    const { idTipoServicio } = req.params;

    try {
        const tipoServicio = await Tipo_servicio.findOne({ where: { idTipoServicio } });

        await tipoServicio.destroy();
        return res.status(200).json({ 
            mensaje: `El tipo de servicio con el ID ${idTipoServicio} fue eliminado con éxito` 
        });
    } catch (error) {
        console.error("Error al eliminar el tipo de servicio:", error);
        return res.status(500).json({ error: "Error al eliminar el tipo de servicio", detalle: error.message });
    }
};


export default {
    getTipoServicios,
    getTipoServicioById,
    createTipoServicio,
    deleteTipoServicio
}