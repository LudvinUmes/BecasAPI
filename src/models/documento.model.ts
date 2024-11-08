import { DataTypes } from 'sequelize';
import sequelize from '../db/connection';
import { Aplicacion } from './aplicacion.model';

export const Documento = sequelize.define('documento', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    tipo_documento: {
        type: DataTypes.STRING,
    },
    url_documento: {
        type: DataTypes.STRING,
    },
    fecha_subida: {
        type: DataTypes.DATE,
    },
});

Documento.belongsTo(Aplicacion, { foreignKey: 'aplicacionId' });
Aplicacion.hasMany(Documento, { foreignKey: 'aplicacionId' });
