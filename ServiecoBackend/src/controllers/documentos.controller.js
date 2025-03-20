import Documento from '../models/documentodb';
import multer from 'multer';
import path from 'path';
import fs from 'fs';

// Configurar Multer para subir archivos
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadPath = 'uploads/documentos/';
        if (!fs.existsSync(uploadPath)) {
            fs.mkdirSync(uploadPath, { recursive: true });
        }
        cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage }).single('archivo');

// Subir un nuevo documento
const uploadDocumento = async (req, res) => {
    upload(req, res, async (err) => {
        if (err) {
            return res.status(500).json({ error: 'Error al subir el archivo', detalle: err.message });
        }
        try {
            const { nombre, idPlanta } = req.body;

            if (!req.file) {
                return res.status(400).json({ error: 'Debe adjuntar un archivo' });
            }

            const nuevoDocumento = await Documento.create({
                nombre,
                archivo: req.file.filename,
                idPlanta
            });

            return res.status(201).json(nuevoDocumento);
        } catch (error) {
            return res.status(500).json({ error: 'Error al guardar el documento', detalle: error.message });
        }
    });
};

// Eliminar un documento por ID
const deleteDocumentoById = async (req, res) => {
    const { idDocumento } = req.params;

    try {
        const documento = await Documento.findOne({ where: { idDocumento } });

        // Eliminar archivo del sistema
        const filePath = `uploads/documentos/${documento.archivo}`;
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
        }

        await documento.destroy();
        return res.status(200).json({ mensaje: `Documento con ID ${idDocumento} eliminado con éxito` });
    } catch (error) {
        return res.status(500).json({ error: 'Error al eliminar el documento', detalle: error.message });
    }
};

// Modificar solo el nombre del documento (no el archivo)
const updateDocumentoNombre = async (req, res) => {
    const { idDocumento } = req.params;
    const { nombre } = req.body;

    try {
        const documento = await Documento.findOne({ where: { idDocumento } });

        await documento.update({ nombre });

        return res.status(200).json({ mensaje: "Nombre del documento actualizado con éxito", documento });
    } catch (error) {
        return res.status(500).json({ error: 'Error al actualizar el nombre', detalle: error.message });
    }
};

export default { 
    uploadDocumento, 
    deleteDocumentoById, 
    updateDocumentoNombre 
};
