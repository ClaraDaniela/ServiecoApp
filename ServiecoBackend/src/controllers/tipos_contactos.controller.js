import Tipo_contacto from '../models/tipos_contactosdb'

const getTipoContacto = async (req, res) => {
    try{
        const tiposContactos = await Tipo_contacto.findAll();
        res.status(200).json(tiposContactos);
    } catch (error) {
        console.error("Error al obtener los tipos de contactos:", error);
        res.status(500).json({ error: "Error al obtener tipos de contacto", detalle: error.message });
    }
};

const getTipoContactoById = async (req, res) => {
    const { idTipoContacto } = req.params;

    try {
        const tipoContacto = await Tipo_contacto.findOne({ where: { idTipoContacto } });

        res.status(200).json(tipoContacto);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el tipo de contacto', detalle: error.message });
    }
};


export default {
    getTipoContacto,
    getTipoContactoById
};