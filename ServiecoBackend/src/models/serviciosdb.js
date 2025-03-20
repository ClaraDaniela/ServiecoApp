import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Servicio = sequelize.define('Servicio', {
    codigo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    categoriaId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    Costo_idCosto: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    Tipo_servicio_idTipo_servicio: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
},
{
    tableName: 'Servicio', // Nombre de la tabla en MySQL
    timestamps: false
});

export default Servicio;