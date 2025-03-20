import Joi from "joi";

const direccionSchema = Joi.object({
    direccion: Joi.string().min(5).max(255).required().messages({
        "string.base": "Direccion debe ser un texto",
        "string.empty": "Direccion no debe ser vacío",
        "string.min": "Direccion debe tener al menos 5 caracteres",
        "string.max": "Direccion puede tener como máximo 255 caracteres",
        "any.required": "Direccion es requerido"
    }),
    localidad: Joi.string().min(5).max(255).required().messages({
        "string.base": "La localidad debe ser un texto",
        "string.min": "La localidad debe tener al menos 5 caracteres",
        "string.max": "La localidad puede tener como máximo 255 caracteres"
    }),
    provincia: Joi.string().min(5).max(255).messages({
        "string.base": "La provincia debe ser un texto",
        "string.min": "La provincia debe tener al menos 5 caracteres",
        "string.max": "La provincia puede tener como máximo 255 caracteres"
    }),
    cp: Joi.string().min(4).max(255).messages({
        "string.min": "El codigo postal debe tener al menos 4 caracteres",
        "string.max": "El codigo postal puede tener como máximo 10 caracteres"
    })
});

export default contactoSchema;