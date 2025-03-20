import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Operario = sequelize.define('Operario', {
    idOperario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    actividad: {
        type: DataTypes.STRING,
        allowNull: true,
    }
},
{
    tableName: 'Operario', // Nombre de la tabla en MySQL
    timestamps: false
});

export default Operario;