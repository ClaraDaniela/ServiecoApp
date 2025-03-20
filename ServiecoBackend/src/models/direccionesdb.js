import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Direccion = sequelize.define('Direccion', {
    idDireccion: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    direccion: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    localidad: {
        type: DataTypes.STRING,
        allowNull: true
    },
    provincia: {
        type: DataTypes.STRING,
        allowNull: true
    },
    cp: {
        type: DataTypes.STRING,
        allowNull: true
    }
},
{
    tableName: 'Direccion', // Nombre de la tabla en MySQL
    timestamps: false
});

export default Direccion;