import Contacto from "../models/contactosdb";

// Obtener los contactos de una planta específica
const getContactoByPlanta = async (req, res) => {
    const { Planta_idPlanta } = req.params;

    try {
        const contactos = await Contacto.findAll({ where: { Planta_idPlanta }});

        return res.status(200).json(contactos);
    } catch (error) {
        console.error(`Error al obtener los contactos de la planta ${Planta_idPlanta}:`, error);
        return res.status(500).json({ error: "Error en el servidor" });
    }
};

// Crear un nuevo contacto
const createContacto = async (req, res) => {
    try {
        const nuevoContacto = await Contacto.create(req.body);
        return res.status(201).json(nuevoContacto);
    } catch (error) {
        console.error("Error al crear el contacto:", error);
        return res.status(500).json({ error: "Error al crear el contacto", detalle: error.message });
    }
};

// Eliminar contacto por nombre, apellido y planta
const deleteContacto = async (req, res) => {
    const { nombre, apellido, Planta_idPlanta } = req.params;

    try {
        const contacto = await Contacto.findOne({ where: { nombre, apellido, Planta_idPlanta } });
        await contacto.destroy();

        return res.status(200).json({ 
            mensaje: `El contacto ${nombre} ${apellido} de la planta ${Planta_idPlanta} fue eliminado con éxito` 
        });
    } catch (error) {
        console.error("Error al eliminar el contacto:", error);
        return res.status(500).json({ error: "Error al eliminar el contacto", detalle: error.message });
    }
};

// Actualizar contacto por nombre, apellido y planta
const updateContacto = async (req, res) => {
    const { nombre, apellido, Planta_idPlanta } = req.params;

    try {
        const contacto = await Contacto.findOne({ where: { nombre, apellido, Planta_idPlanta } });
        await contacto.update(req.body);
        
        return res.status(200).json({ mensaje: "Contacto actualizado con éxito", contacto });
    } catch (error) {
        console.error("Error al actualizar el contacto:", error);
        return res.status(500).json({ error: "Error al actualizar el contacto", detalle: error.message });
    }
};

export default {
    getContactoByPlanta,
    createContacto,
    deleteContacto,
    updateContacto
};
