import Email_contacto from '../models/emails_contactodb.js';

const existeEmailContactoById = async (req, res, next) => {
const { nombre, apellido, Contacto_Planta_idPlanta } = req.params;

    try {
        const email_contactos = await Email_contacto.findAll({
            where: { nombre, apellido, Contacto_Planta_idPlanta }
        });

        return res.status(200).json(email_contactos);
    } 
     catch (error) {
        res.status(500).json({ error: 'Error al verificar el email del contacto', detalle: error.message });
    }
};

export default { existeEmailContactoById };