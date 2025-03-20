import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Moneda = sequelize.define('Moneda', {
    idMoneda: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    }
},
{
    tableName: 'Moneda', // Nombre de la tabla en MySQL
    timestamps: false
});

export default Moneda;