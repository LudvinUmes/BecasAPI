import { DataTypes } from 'sequelize';
import sequelize from '../db/connection';
import { Solicitante } from './solicitante.model';

export const Notificacion = sequelize.define('notificacion', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    mensaje: {
        type: DataTypes.TEXT,
    },
    fecha_envio: {
        type: DataTypes.DATE,
    },
    leido: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
});

Notificacion.belongsTo(Solicitante, { foreignKey: 'solicitanteId' });
Solicitante.hasMany(Notificacion, { foreignKey: 'solicitanteId' });
