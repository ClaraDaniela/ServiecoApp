import Cliente from '../models/clientesdb.js';
import Direccion from '../models/direccionesdb.js';
import Estado_cliente from '../models/estados_clientesdb.js';
import Moneda from '../models/monedasdb.js';

// Obtener todos los clientes
const getAllClientes = async (req, res) => {
    const clientes = await Cliente.findAll({
            //para que en vez de mostrar solo las claves foraneas de las tablas, coloque la informacion de estas 
            include: [
                {
                    model: Direccion,
                    as: 'Direccion',
                    attributes: ['idDireccion', 'direccion', 'localidad', 'provincia', 'cp'] 
                },
                {
                    model: Moneda,
                    as: 'Moneda',
                    attributes: ['nombre'] 
                },
                {
                    model: Estado_cliente,
                    as: 'Estado_cliente',
                    attributes: ['estado'] 
                }
            ]
    });
};

// Obtener cliente por código
const getClienteById = async (req, res) => {
    const { codigo } = req.params;

    const cliente = await Cliente.findOne({ where: { codigo } });
    res.status(200).json(cliente);
};

// Obtener cliente por su nombre
const getClienteByname = async (req, res) => {
    const { nombre } = req.params;

    const cliente = await Cliente.findOne({ where: { nombre } });
    res.status(200).json(cliente);
};

// Crear un nuevo cliente
const createCliente = async (req, res) => {
    try {
    const nuevoCliente = await Cliente.create(req.body);
    res.status(201).json(nuevoCliente);
    }
    catch(error) {
        console.error("Error al crear el cliente:", error);
        return res.status(500).json({ error: "Error al crear el cliente", detalle: error.message })
    }
};

// Eliminar cliente por código
const deleteClienteById = async (req, res) => {
    const { codigo } = req.params;
try {
    const cliente = await Cliente.findOne({ where: { codigo } });
    await cliente.destroy();
    res.status(200).json({ mensaje: `El cliente con el código ${codigo} fue eliminado con éxito` });
}
    catch(error) {
        console.error("Error al eliminar el cliente:", error);
        return res.status(500).json({ error: "Error al eliminar el cliente", detalle: error.message })
    }
};

export default { getAllClientes, getClienteById, createCliente, deleteClienteById, getClienteByname };

