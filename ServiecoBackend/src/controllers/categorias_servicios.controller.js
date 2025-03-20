import Categoria_servicio from '../models/categorias_serviciosdb'

const getCategoriaServicioById = async (req, res) => {
    const { idCategoria_servicio } = req.params;

    const categoria = await Categoria_servicio.findOne({ where: { idCategoria_servicio } });
    res.status(200).json(categoria);
};

const getCategorias = async (req, res) => {
    const categorias = await Categoria_servicio.findAll();
    res.status(200).json(categorias);
}


// Crear un nueva categoria
const createCategoria = async (req, res) => {
    const nuevaCategoria = await Categoria_servicio.create(req.body);
    return res.status(201).json(nuevaCategoria);
};


export default {
    getCategoriaServicioById,
    createCategoria
};