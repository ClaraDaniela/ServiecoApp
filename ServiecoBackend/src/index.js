import express from 'express';
import cors from 'cors';

const app = express();

import clientesRoute from './routes/clientes.route.js'  
const PORT = process.env.PORT ?? 4000

app.use(express.json())
app.use(cors());
app.use(clientesRoute)

app.listen(PORT, () => {
    console.log(`SERVIDOR EJECUTÁNDOSE EN EL PUERTO ${PORT} `)
})