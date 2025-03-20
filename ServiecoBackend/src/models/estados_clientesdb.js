import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Estado_cliente = sequelize.define('Estado_cliente', {
    idEstado_cliente: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    estado: {
        type: DataTypes.STRING,
        allowNull: false,
    }
},
{
    tableName: 'Estado_cliente', // Nombre de la tabla en MySQL
    timestamps: false
});

export default Estado_cliente;