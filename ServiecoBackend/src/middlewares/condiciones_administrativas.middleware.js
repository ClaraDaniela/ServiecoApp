import Condicion_administrativa from '../models/condiciones_administrativasdb.js';

const existeCondicionAdministrativaById = async (req, res, next) => {
    const idCondicionAdministrativa = req.params.codigo;

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

const existenCondicionesAdministrativas = async (req, res, next) => {
    try {
        const condiciones = await Condicion_administrativa.findAll();

        if (condiciones.length === 0) {
            return res.status(400).json({ error: "No existen condiciones administrativas por el momento" });
        }

        next();
    } catch (error) {
        res.status(500).json({ error: 'Error al verificar las condiciones administrativas', detalle: error.message });
    }
};

export default { existeCondicionAdministrativaById, existenCondicionesAdministrativas };