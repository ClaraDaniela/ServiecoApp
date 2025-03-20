import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Maquina = sequelize.define('Maquina', {
    codigo: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    nombre_equipo: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    cargo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: true
    },
    porta_pallets: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    escalera: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    transmision: {
        type: DataTypes.STRING,
        allowNull: true
    }
},
{
    tableName: 'Maquina', // Nombre de la tabla en MySQL
    timestamps: false
});

export default Maquina;