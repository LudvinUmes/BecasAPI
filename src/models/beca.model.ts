import { DataTypes } from 'sequelize';
import sequelize from '../db/connection';
import { Organizacion } from './organizacion.model';

export const Beca = sequelize.define('beca', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre_beca: {
        type: DataTypes.STRING,
    },
    descripcion: {
        type: DataTypes.STRING,
    },
    monto: {
        type: DataTypes.FLOAT,
    },
    fecha_inicio: {
        type: DataTypes.DATE,
    },
    fecha_fin: {
        type: DataTypes.DATE,
    },
    pais_destino: {
        type: DataTypes.STRING,
    },
    nivel_academico: {
        type: DataTypes.STRING,
    },
});

Beca.belongsTo(Organizacion, { foreignKey: 'organizacionId' });
Organizacion.hasMany(Beca, { foreignKey: 'organizacionId' });
