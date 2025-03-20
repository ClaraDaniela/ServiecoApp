import Costo from '../models/costosdb.js';

const existeCostoById = async (req, res, next) => {
    const idCosto = req.params.codigo;

    try {
        const cliente = await Cliente.findOne({ where: { codigo: clienteCodigo } });

        if (!cliente) {
            return res.status(404).json({
                error: `No se encuentra la condicion administrativa con el id ${idCondicionAdministrativa}`
            });
        }
        next();
    } catch (error) {
        res.status(500).json({ error: 'Error al verificar el cliente', detalle: error.message });
    }
};

const existenCostos = async (req, res, next) => {
    try {
        const costos = await Costo.findAll();

        if (costos.length === 0) {
            return res.status(400).json({ error: "No existe registros de costos por el momento" });
        }

        next();
    } catch (error) {
        res.status(500).json({ error: 'Error al verificar las costos', detalle: error.message });
    }
};

export default { existeCostoById, existenCostos };