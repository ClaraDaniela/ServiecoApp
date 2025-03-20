import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Metrica_precios = sequelize.define('Metrica_precios', {
    idMetrica_precios: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    referencia: {
        type: DataTypes.STRING,
        allowNull: true
    },
    unidad: {
        type: DataTypes.STRING,
        allowNull: true
    },
    valor_unitario: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    fecha_vigencia: {
        type: DataTypes.DATE,
        allowNull: false
    }
},
{
    tableName: 'Metrica_precios', // Nombre de la tabla en MySQL
    timestamps: false
});

export default Metrica_precios;