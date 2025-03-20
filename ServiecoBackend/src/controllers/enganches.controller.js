import Enganche from "../models/enganchedb";

// Obtener todos los enganches
const getEnganches = async (req, res) => {
    try {
        const enganches = await Enganche.findAll();
        res.status(200).json(enganches);
    } catch (error) {
        console.error("Error al obtener enganches:", error);
        res.status(500).json({ error: "Error al obtener enganches", detalle: error.message });
    }
};

// Crear un nuevo enganche
const createEnganche = async (req, res) => {
    try {
        const nuevoEnganche = await Enganche.create(req.body);
        res.status(201).json(nuevoEnganche);
    } catch (error) {
        console.error("Error al crear enganche:", error);
        res.status(500).json({ error: "Error al crear enganche", detalle: error.message });
    }
};

// Eliminar un enganche por ID
const deleteEnganche = async (req, res) => {
    const { idEnganche } = req.params;

    try {
        const enganche = await Enganche.findByPk(idEnganche);

        await enganche.destroy();
        res.status(200).json({ mensaje: `Enganche con ID ${idEnganche} eliminado con éxito` });
    } catch (error) {
        console.error("Error al eliminar enganche:", error);
        res.status(500).json({ error: "Error al eliminar enganche", detalle: error.message });
    }
};

export default {
    getEnganches,
    createEnganche,
    deleteEnganche
};
