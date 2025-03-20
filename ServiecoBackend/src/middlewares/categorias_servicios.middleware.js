import Categoria_servicio from '../models/categorias_serviciosdb'

const getCategoriaServicioById = async (req, res) => {
    const { idCategoria_servicio } = req.params;

    try {
        const categoria = await Categoria_servicio.findOne({ where: { idCategoria_servicio } });

        if (!categoria) {
            return res.status(404).json({ error: `No se encontró la categoria con el id ${ idCategoria_servicio }` });
        }

        res.status(200).json(categoria);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener la categoria', detalle: error.message });
    }
};