import Joi from "joi";

const contactoSchema = Joi.object({
    nombre: Joi.string().min(5).max(45).required().messages({
        "string.base": "nombre debe ser un texto",
        "string.empty": "nombre no debe ser vacío",
        "string.min": "nombre debe tener al menos 5 caracteres",
        "string.max": "nombre puede tener como máximo 45 caracteres",
        "any.required": "nombre es requerido"
    }),
    apellido: Joi.string().min(5).max(45).required().messages({
        "string.base": "El apellido debe ser un texto",
        "string.empty": "El apellido no debe ser vacío",
        "string.min": "El apellido debe tener al menos 5 caracteres",
        "string.max": "El apellido puede tener como máximo 45 caracteres",
        "any.required": "El apellido es requerido"
    }),
    cargo: Joi.string().min(5).max(45).messages({
        "string.base": "El cargo debe ser un texto",
        "string.min": "El cargo debe tener al menos 5 caracteres",
        "string.max": "El cargo puede tener como máximo 45 caracteres",
    }), 
    Planta_idPlanta: Joi.number().integer().required().messages({
        "number.base": "ID de planta debe ser un numero",
        "number.empty": "El id de planta no debe ser vacío",
        "number.integer": "ID de planta debe ser un numero entero",
        "number.required": "ID de planta es requerido",
    }),
    Tipo_contacto_idTipo_contacto: Joi.number().integer().required().messages({
        "number.base": "ID de tipo de contacto debe ser un numero",
        "number.empty": "El id de tipo de contacto no debe ser vacío",
        "number.integer": "ID de tipo de contacto debe ser un numero entero",
        "number.required": "ID de tipo de contacto es requerido",
    }),
});

export default contactoSchema;
