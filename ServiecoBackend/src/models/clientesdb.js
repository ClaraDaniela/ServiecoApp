import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';
import Estado_cliente from './estados_clientesdb.js';
import Moneda from './monedasdb.js'
import Direccion from './direccionesdb.js';

const Cliente = sequelize.define('Cliente', {
    codigo: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    razon_social: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: true
    },
    CUIT: {
        type: DataTypes.STRING,
        allowNull: false
    },
    percepcion_IIBB: {
        type: DataTypes.STRING,
        allowNull: true
    },
    tipo_contribucion: {
        type: DataTypes.STRING,
        allowNull: true
    },
    acepta_FCE: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    orden_compra: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    fecha_alta: {
        type: DataTypes.DATE,
        allowNull: true
    },
    direccion_fiscalId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    estadoId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    monedaId: {
        type: DataTypes.INTEGER,
        allowNull: false
    } 
},
{
    tableName: 'Cliente', // Nombre de la tabla en MySQL
    timestamps: false
});

Cliente.belongsTo(Direccion, { foreignKey: 'direccion_fiscalId', as: 'Direccion' });
Cliente.belongsTo(Moneda, { foreignKey: 'monedaId', as: 'Moneda' });
Cliente.belongsTo(Estado_cliente, { foreignKey: 'estadoId', as: 'Estado_cliente' });

export default Cliente;
