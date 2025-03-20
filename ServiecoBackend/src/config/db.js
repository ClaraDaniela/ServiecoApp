import { Sequelize } from 'sequelize';
import { config } from 'dotenv';

config();

const sequelize = new Sequelize(
  process.env.DB_NOMBRE,
  process.env.DB_USUARIO,
  process.env.DB_CONTRASENIA,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
  }
);

sequelize.authenticate()
  .then(() => {
    console.log('BASE DE DATOS CONECTADA');
  })
  .catch((err) => {
    console.error('Error de conexión a la base de datos:', err);
  });

export default sequelize;