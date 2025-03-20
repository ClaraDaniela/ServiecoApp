import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Planta = sequelize.define('Planta', {
    idPlanta: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    Cliente_codigo: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    Direccion_idDireccion: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    tipo_plataforma: {
        type: DataTypes.STRING,
        allowNull: true
    },
    Metrica_precios_idMetrica_precios: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    Condicion_administrativa_idCondicion_administrativa: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},
{
    tableName: 'Planta', // Nombre de la tabla en MySQL
    timestamps: false
});

export default Planta;