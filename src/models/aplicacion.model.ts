import { DataTypes } from 'sequelize';
import sequelize from '../db/connection';
import { Solicitante } from './solicitante.model';
import { Beca } from './beca.model';

export const Aplicacion = sequelize.define('aplicacion', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    fecha_aplicacion: {
        type: DataTypes.DATE,
    },
    estado: {
        type: DataTypes.ENUM('en revision', 'aceptada', 'rechazada'),
    },
    nota: {
        type: DataTypes.TEXT,
    },
});

Aplicacion.belongsTo(Solicitante, { foreignKey: 'solicitanteId' });
Aplicacion.belongsTo(Beca, { foreignKey: 'becaId' });

Solicitante.hasMany(Aplicacion, { foreignKey: 'solicitanteId' });
Beca.hasMany(Aplicacion, { foreignKey: 'becaId' });
