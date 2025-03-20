import Moneda from '../models/monedasdb'

const getMonedas = async (req, res) => {
    try {
        const monedas = await Moneda.findAll();
        res.status(200).json(monedas);
    } catch (error) {
        console.error("Error al obtener monedas:", error);
        res.status(500).json({ error: "Error al obtener monedas", detalle: error.message });
    }
};

const createMoneda = async (req, res) => {
    try {
        const nuevaMoneda = await Moneda.create(req.body);
        return res.status(201).json(nuevaMoneda);
    } catch (error) {
        console.error("Error al crear la moneda:", error);
        return res.status(500).json({ error: "Error al crear la moneda", detalle: error.message });
    }
};

const deleteMoneda = async (req, res) => {
    const { idMoneda } = req.params;

    try {
        const moneda = await Moneda.findOne({ where: { idMoneda } });

        await moneda.destroy();
        return res.status(200).json({ 
            mensaje: `La moneda con el ID ${idMoneda} fue eliminada con éxito` 
        });
    } catch (error) {
        console.error("Error al eliminar la moneda:", error);
        return res.status(500).json({ error: "Error al eliminar la moneda", detalle: error.message });
    }
};

export default {
    getMonedas,
    createMoneda,
    deleteMoneda
}