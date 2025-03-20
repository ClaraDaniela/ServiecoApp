import Contacto from '../models/contactosdb'

const existenContactos = async (req, res, next) => {
    try {
        const contactos = await Contacto.findAll();

        if (contactos.length === 0) {
            return res.status(400).json({ error: "No existen contactos por el momento" });
        }

        next();
    } catch (error) {
        res.status(500).json({ error: 'Error al verificar los contactos', detalle: error.message });
    }
};

const existeContactoByPKs = async (req, res) => {
    const { nombre, apellido, Planta_idPlanta } = req.params;

    try {
        const contacto = await Contacto.findOne({ where: { nombre, apellido, Planta_idPlanta } });

        if (!contacto) {
            return res.status(404).json({ 
                error: `No se encontró el contacto ${nombre} ${apellido} en la planta con ID ${Planta_idPlanta}` 
            });
        }
        next();
    } catch (error) {
        res.status(500).json({ error: 'Error al verificar el contacto', detalle: error.message });
    }
};

export default { existenContactos, existeContactoByPKs };

