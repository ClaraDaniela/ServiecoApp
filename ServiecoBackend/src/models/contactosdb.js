import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Contacto = sequelize.define('Contacto', {
    nombre: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    apellido: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    cargo: {
        type: DataTypes.STRING,
        allowNull: true
    },
    Planta_idPlanta: {
        type: DataTypes.INTEGER,
        primaryKey:DataTypes.INTEGER
    },
    Tipo_contacto_idTipo_contacto: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
},
{
    tableName: 'Contacto', // Nombre de la tabla en MySQL
    timestamps: false
});

export default Contacto;