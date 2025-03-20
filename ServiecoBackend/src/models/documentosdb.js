import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Documento = sequelize.define('Documento', {
    idDocumento: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: true
    },
    tipo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    size: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    fecha_creacion: {
        type: DataTypes.DATE,
        allowNull: false
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
{
    tableName: 'Documento', // Nombre de la tabla en MySQL
    timestamps: false
});

export default Documento;