import Material from '../models/materialesdb'

const getMateriales = async (req, res) => {
    try {
        const materiales = await Material.findAll();
        res.status(200).json(materiales);
    } catch (error) {
        console.error("Error al obtener materiales:", error);
        res.status(500).json({ error: "Error al obtener materiales", detalle: error.message });
    }
};

const getMaterialById = async (req, res) => {
    const { idMaterial } = req.params;
    
    try {
        const material = await Material.findOne({where: { idMaterial }});
  
        res.status(200).json(material);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el material', detalle: error.message });
    }
};

const createMaterial = async (req, res) => {
    try {
        const nuevoMaterial = await Material.create(req.body);
        return res.status(201).json(nuevoMaterial);
    } catch (error) {
        console.error("Error al crear el material:", error);
        return res.status(500).json({ error: "Error al crear el material", detalle: error.message });
    }
};

// Eliminar material
const deleteMaterial = async (req, res) => {
    const { idMaterial } = req.params;

    try {
        const material = await Material.findOne({ where: { idMaterial } });

        await material.destroy();
        return res.status(200).json({ 
            mensaje: `La material con el ID ${idMaterial} fue eliminado con éxito` 
        });
    } catch (error) {
        console.error("Error al eliminar el material:", error);
        return res.status(500).json({ error: "Error al eliminar el material", detalle: error.message });
    }
};

// Actualizar Material por ID
const updateMaterial = async (req, res) => {
    const { idMaterial } = req.params;

    try {
        const material = await Material.findOne({ where: { idMaterial } });

        if (Object.keys(req.body).length === 0) {
            return res.status(400).json({ error: "No se proporcionaron datos para actualizar" });
        }

        await material.update(req.body);
        return res.status(200).json({ mensaje: "Material actualizado con éxito", material });
    } catch (error) {
        console.error("Error al actualizar el material:", error);
        return res.status(500).json({ error: "Error al actualizar el material", detalle: error.message });
    }
};

export default {
    getMateriales,
    getMaterialById,
    createMaterial,
    deleteMaterial,
    updateMaterial
}