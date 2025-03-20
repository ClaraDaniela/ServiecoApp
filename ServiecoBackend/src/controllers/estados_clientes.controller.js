import Estados_clientes from '../models/estados_clientesdb';

const getestadosClientes = async (req, res) => {
    try {
        const estados = await Estados_clientes.findAll();
        res.status(200).json(estados);
    } catch (error) {
        console.error("Error al obtener estados:", error);
        res.status(500).json({ error: "Error al obtener estados", detalle: error.message });
    }
};

export default { getestadosClientes };