import Telefono_contacto from "../models/telefonos_contactodb";

// Obtener los telefonos de un contacto en específico
const getTelefonosByContacto = async (req, res) => {
    const { nombre, apellido, Contacto_Planta_idPlanta } = req.params;

    try {
        const telefonos_contacto = await Telefono_contacto.findAll({
            where: { nombre, apellido, Contacto_Planta_idPlanta }
        });

        return res.status(200).json(telefonos_contacto);
    } catch (error) {
        console.error(`Error al obtener los telefonos del contacto ${nombre, apellido}:`, error);
        return res.status(500).json({ error: "Error en el servidor" });
    }
};

// Crear un nuevo telefono
const createTelefonoContacto = async (req, res) => {
    try {
        const nuevoTelefono = await Telefono_contacto.create(req.body);
        return res.status(201).json(nuevoTelefono);
    } catch (error) {
        console.error("Error al crear el telefono:", error);
        return res.status(500).json({ error: "Error al crear el telefono", detalle: error.message });
    }
};

// Eliminar telefono segun su id
const deleteTelefonoContacto = async (req, res) => {
    const { idTelefono_contacto } = req.params;

    try {
        const telefono_contacto = await Telefono_contacto.findOne({ where: { idTelefono_contacto } });

        await telefono_contacto.destroy();
        return res.status(200).json({ 
            mensaje: `El email con el id ${ idTelefono_contacto } fue eliminado con éxito` 
        });
    } catch (error) {
        console.error("Error al eliminar el telefono:", error);
        return res.status(500).json({ error: "Error al eliminar el telefono", detalle: error.message });
    }
};

// Actualizar telefono por id
const updateTelefonoContacto = async (req, res) => {
    const { idTelefono_contacto } = req.params;

    try {
        const telefono_contacto = await Telefono_contacto.findOne({ where: { idTelefono_contacto } });

        await telefono_contacto.update(req.body);
        return res.status(200).json({ mensaje: "Telefono actualizado con éxito", telefono_contacto });
    } catch (error) {
        console.error("Error al actualizar el telefono:", error);
        return res.status(500).json({ error: "Error al actualizar el telefono", detalle: error.message });
    }
};

export default {
    getTelefonosByContacto,
    createTelefonoContacto,
    deleteTelefonoContacto,
    updateTelefonoContacto
};
