import Cliente from '../models/clientesdb.js';

const existeClienteById = async (req, res, next) => {
    const clienteCodigo = req.params.codigo;

    try {
        const cliente = await Cliente.findOne({ where: { codigo: clienteCodigo } });

        if (!cliente) {
            return res.status(404).json({
                error: `No se encuentra el cliente con el código ${clienteCodigo}`
            });
        }
        next();
    } catch (error) {
        res.status(500).json({ error: 'Error al verificar el cliente', detalle: error.message });
    }
};

const existenClientes = async (req, res, next) => {
    try {
        const clientes = await Cliente.findAll();

        if (clientes.length === 0) {
            return res.status(400).json({ error: "No existen clientes por el momento" });
        }

        next();
    } catch (error) {
        res.status(500).json({ error: 'Error al verificar los clientes', detalle: error.message });
    }
};

export default { existeClienteById, existenClientes };
