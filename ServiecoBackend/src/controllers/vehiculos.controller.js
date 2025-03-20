import Vehiculo from "../models/vehiculodb";

// Obtener todos los vehículos
const getVehiculos = async (req, res) => {
    try {
        const vehiculos = await Vehiculo.findAll();
        res.status(200).json(vehiculos);
    } catch (error) {
        console.error("Error al obtener vehículos:", error);
        res.status(500).json({ error: "Error al obtener vehículos", detalle: error.message });
    }
};

// Crear un nuevo vehículo
const createVehiculo = async (req, res) => {
    try {
        const nuevoVehiculo = await Vehiculo.create(req.body);
        res.status(201).json(nuevoVehiculo);
    } catch (error) {
        console.error("Error al crear vehículo:", error);
        res.status(500).json({ error: "Error al crear vehículo", detalle: error.message });
    }
};

// Modificar un vehículo por ID
const updateVehiculo = async (req, res) => {
    const { idVehiculo } = req.params;

    try {
        const vehiculo = await Vehiculo.findByPk(idVehiculo);

        await vehiculo.update(req.body);
        res.status(200).json({ mensaje: "Vehículo actualizado con éxito", vehiculo });
    } catch (error) {
        console.error("Error al actualizar vehículo:", error);
        res.status(500).json({ error: "Error al actualizar vehículo", detalle: error.message });
    }
};

// Eliminar un vehículo por ID
const deleteVehiculo = async (req, res) => {
    const { idVehiculo } = req.params;

    try {
        const vehiculo = await Vehiculo.findByPk(idVehiculo);

        await vehiculo.destroy();
        res.status(200).json({ mensaje: `Vehículo con ID ${idVehiculo} eliminado con éxito` });
    } catch (error) {
        console.error("Error al eliminar vehículo:", error);
        res.status(500).json({ error: "Error al eliminar vehículo", detalle: error.message });
    }
};

export default {
    getVehiculos,
    createVehiculo,
    updateVehiculo,
    deleteVehiculo
};
