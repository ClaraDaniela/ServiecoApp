import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Turno = sequelize.define('Turno', {
    idTurno: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tipo: {
        type: DataTypes.STRING,
        allowNull: true
    },
    horario_entrada: {
        type: DataTypes.TIME,
        allowNull: true
    },
    horario_salida: {
        type: DataTypes.TIME,
        allowNull: true
    },
    dias: {
        type: DataTypes.STRING,
        allowNull: true
    },
    Operario_idOperario: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    Prestacion_servicios_idPrestacion_servicios: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    Prestacion_servicios_Servicio_codigo: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    Prestacion_servicios_Planta_idPlanta: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    Prestacion_servicios_Plantaw_Cliente_codigo: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
{
    tableName: 'Turno', // Nombre de la tabla en MySQL
    timestamps: false
});

export default Turno;