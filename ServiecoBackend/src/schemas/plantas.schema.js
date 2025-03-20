import Joi from "joi";

const plantasSchema = Joi.object({
    Cliente_codigo: Joi.string().min(4).max(10).required().messages({
        "string.base": "Codigo del cliente debe ser un texto",
        "string.empty": "Codigo del cliente no debe ser vacío",
        "string.min": "Codigo del cliente debe tener al menos 4 caracteres",
        "string.max": "Codigo del cliente puede tener como máximo 10 caracteres",
        "any.required": "Codigo del cliente es requerido"
    }),
    Direccion_idDireccion: Joi.number().integer().required().messages({
        "number.base": "El id de la direccion debe ser un numero",
        "number.empty": "El id de la direccion no debe ser vacío",
        "any.required": "El id de la direccion es requerido",
        "number.integer": "ID de la direccion debe ser un numero entero",
    }),
    tipo_plataforma: Joi.string().min(5).max(45).messages({
        "string.base": "El tipo de plataforma debe ser un texto",
        "string.min": "El tipo de plataforma debe tener al menos 5 caracteres",
        "string.max": "El tipo de plataforma puede tener como máximo 45 caracteres",
    }), 
    Metrica_precios_idMetrica_precios: Joi.number().integer().required().messages({
        "number.base": "ID de metrica de precios debe ser un numero",
        "number.empty": "El id de metrica de precios no debe ser vacío",
        "number.integer": "ID de metrica de precios debe ser un numero entero",
        "number.required": "ID de metrica de precios es requerido",
    }),
    Condicion_administrativa_idCondicion_administrativa: Joi.number().integer().required().messages({
        "number.base": "ID de la condicion administrativa debe ser un numero",
        "number.empty": "El id de la condicion administrativa no debe ser vacío",
        "number.integer": "ID de la condicion administrativa debe ser un numero entero",
        "number.required": "ID de la condicion administrativa es requerido",
    }),
});

export default contactoSchema;