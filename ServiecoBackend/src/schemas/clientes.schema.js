import Joi from "joi";

const clienteSchema = Joi.object({
    nombre: Joi.string().min(5).max(45).required().messages({
        "string.base": "nombre debe ser un texto",
        "string.empty": "nombre no debe ser vacío",
        "string.min": "nombre debe tener al menos 5 caracteres",
        "string.max": "nombre puede tener como máximo 45 caracteres",
        "any.required": "nombre es requerido"
    }),
    razon_social: Joi.string().min(5).max(45).required().messages({
        "string.base": "La razon social debe ser un texto",
        "string.empty": "Razon social no debe ser vacío",
        "string.min": "Razon social debe tener al menos 5 caracteres",
        "string.max": "Razon social puede tener como máximo 45 caracteres",
        "any.required": "Razon social es requerido"
    }),
    descripcion: Joi.string().min(20).max(255).messages({
        "string.base": "descripcion debe ser un texto",
        "string.min": "descripcion debe tener al menos 20 caracteres",
        "string.max": "descripcion puede tener como máximo 255 caracteres",
    }),
    CUIT: Joi.string().min(11).max(11).required().messages({
        "string.empty": "CUIT no debe ser vacío",
        "string.min": "CUIT debe tener al menos 11 caracteres",
        "string.max": "CUIT puede tener como máximo 11 caracteres",
        "any.required": "CUIT es requerido"
    }),
    percepcion_IIBB: Joi.number().messages({
        "number.base": "percepcion IIBB debe ser un número",
    }),
    tipo_contribucion: Joi.string().min(10).max(45).messages({
        "string.base": "Tipo de contribucion debe ser un texto",
        "string.min": "Tipo de contribucion debe tener al menos 10 caracteres",
        "string.max": "Tipo de contribucion puede tener como máximo 45 caracteres",
    }),
    acepta_FCE: Joi.boolean().truthy('true', 1).falsy('0'),
    fecha_alta: Joi.date(), 
    direccion_fiscal: Joi.number().integer().required().messages({
        "number.base": "ID de direccion fiscal debe ser un numero",
        "number.integer": "ID de direccion fiscal debe ser un numero entero",
        "number.required": "ID de direccion fiscal es requerido",
    }),
    estado: Joi.number().integer().required().messages({
        "number.base": "ID de estado del cliente debe ser un numero",
        "number.integer": "ID de estado del cliente debe ser un numero entero",
        "number.required": "ID de estado del cliente es requerido",
    }),
    moneda: Joi.number().integer().required().messages({
        "number.base": "ID de moneda debe ser un numero",
        "number.integer": "ID de moneda debe ser un numero entero",
        "number.required": "ID de moneda es requerido",
    })
});

export default clienteSchema; // Exportación por defecto