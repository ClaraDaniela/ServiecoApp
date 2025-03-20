import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Material = sequelize.define('Material', {
    idMaterial: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Costo_idCosto: {
        type: DataTypes.INTEGER,
        allowNull: true,
    }
},
{
    tableName: 'Material', // Nombre de la tabla en MySQL
    timestamps: false
});

export default Material;