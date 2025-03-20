import Producto from '../models/productosdb'

const getProductos = async (req, res) => {
    try {
        const productos = await Producto.findAll();
        res.status(200).json(productos);
    } catch (error) {
        console.error("Error al obtener productos:", error);
        res.status(500).json({ error: "Error al obtener productos", detalle: error.message });
    }
};

const getProductoById = async (req, res) => {
    const { idProducto } = req.params;
    
    try {
        const material = await Material.findOne({where: { idMaterial }});

        res.status(200).json(material);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el material', detalle: error.message });
    }
};

const createProducto = async (req, res) => {
    try {
        const nuevoProducto = await Producto.create(req.body);
        return res.status(201).json(nuevoProducto);
    } catch (error) {
        console.error("Error al crear el producto:", error);
        return res.status(500).json({ error: "Error al crear el producto", detalle: error.message });
    }
};

const deleteProducto = async (req, res) => {
    const { idProducto } = req.params;

    try {
        const producto = await Producto.findOne({ where: { idProducto } });

        await producto.destroy();
        return res.status(200).json({ 
            mensaje: `El producto con el ID ${idProducto} fue eliminado con éxito` 
        });
    } catch (error) {
        console.error("Error al eliminar el producto:", error);
        return res.status(500).json({ error: "Error al eliminar el producto", detalle: error.message });
    }
};

const updateProducto = async (req, res) => {
    const { idProducto } = req.params;

    try {
        const producto = await Producto.findOne({ where: { idProducto } });

        if (Object.keys(req.body).length === 0) {
            return res.status(400).json({ error: "No se proporcionaron datos para actualizar" });
        }

        await producto.update(req.body);
        return res.status(200).json({ mensaje: "Producto actualizado con éxito", producto });
    } catch (error) {
        console.error("Error al actualizar el producto:", error);
        return res.status(500).json({ error: "Error al actualizar el producto", detalle: error.message });
    }
};

export default {
    getProductos,
    getProductoById,
    createProducto,
    deleteProducto,
    updateProducto
}