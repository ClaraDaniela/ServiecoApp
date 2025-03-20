import Email_contacto from "../models/email_contactosdb";

// Obtener los emails de un contacto en específico
const getEmailsByContacto = async (req, res) => {
    const { nombre, apellido, Contacto_Planta_idPlanta } = req.params;

    try {
        const email_contactos = await Email_contacto.findAll({
            where: { nombre, apellido, Contacto_Planta_idPlanta }
        });

        return res.status(200).json(email_contactos);
    } catch (error) {
        console.error(`Error al obtener los emails del contacto ${nombre} ${apellido}:`, error);
        return res.status(500).json({ error: "Error en el servidor", detalle: error.message });
    }
};

// Crear un nuevo email
const createEmailContacto = async (req, res) => {
    try {
        const nuevoEmail = await Email_contacto.create(req.body);
        return res.status(201).json(nuevoEmail);
    } catch (error) {
        console.error("Error al crear el email:", error);
        return res.status(500).json({ error: "Error al crear el email", detalle: error.message });
    }
};

// Eliminar email según su ID
const deleteEmailContacto = async (req, res) => {
    const { idEmail_contacto } = req.params;

    try {
        const email_contacto = await Email_contacto.findOne({ where: { idEmail_contacto } });

        await email_contacto.destroy();
        return res.status(200).json({ 
            mensaje: `El email con el ID ${idEmail_contacto} fue eliminado con éxito` 
        });
    } catch (error) {
        console.error("Error al eliminar el email:", error);
        return res.status(500).json({ error: "Error al eliminar el email", detalle: error.message });
    }
};

// Actualizar email por ID
const updateEmailContacto = async (req, res) => {
    const { idEmail_contacto } = req.params;

    try {
        const email_contacto = await Email_contacto.findOne({ where: { idEmail_contacto } });

        if (Object.keys(req.body).length === 0) {
            return res.status(400).json({ error: "No se proporcionaron datos para actualizar" });
        }

        await email_contacto.update(req.body);
        return res.status(200).json({ mensaje: "Email actualizado con éxito", email_contacto });
    } catch (error) {
        console.error("Error al actualizar el email:", error);
        return res.status(500).json({ error: "Error al actualizar el email", detalle: error.message });
    }
};

export default {
    getEmailsByContacto,
    createEmailContacto,
    deleteEmailContacto,
    updateEmailContacto
};

