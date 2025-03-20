import Enganche from '../models/enganchesdb'

const getEnganches = async (req, res) => {
    try {
        const enganches = Enganche.findAll();
        res.console(enganches);
    }
    catch (error) {
        console.menssage(error: "Error al obtener los enganches");
        return res.status(500).(error: "Error al obtener los enganches")
    }
}