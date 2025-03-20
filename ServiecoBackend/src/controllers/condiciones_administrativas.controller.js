import CondicionAdministrativa from '../models/condicion_administrativadb';

// Obtener todas las condiciones administrativas de una planta específica
const getCondicionesByPlanta = async (req, res) => {
    const { idPlanta } = req.params;

    const condiciones = await CondicionAdministrativa.findAll({ where: { idPlanta } });
    return res.status(200).json(condiciones);
};

// Crear una nueva condición administrativa
const createCondicionAdministrativa = async (req, res) => {
    try {
        const nuevaCondicion = await CondicionAdministrativa.create(req.body);
        return res.status(201).json(nuevaCondicion);
    } catch (error) {
        console.error("Error al crear la condición administrativa:", error);
        return res.status(500).json({ error: "Error al crear la condición administrativa", detalle: error.message });
    }
};

// Modificar una condición administrativa
const updateCondicionAdministrativa = async (req, res) => {
    const { idCondicionAdministrativa } = req.params;

    try {
        const condicion = await CondicionAdministrativa.findOne({ where: { idCondicionAdministrativa } });

        await condicion.update(req.body);
        return res.status(200).json({ mensaje: "Condición administrativa actualizada con éxito", condicion });
    } catch (error) {
        console.error("Error al actualizar la condición administrativa:", error);
        return res.status(500).json({ error: "Error en el servidor", detalle: error.message });
    }
};

export default { 
    getCondicionesByPlanta, 
    createCondicionAdministrativa, 
    updateCondicionAdministrativa 
};
