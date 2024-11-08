import { DataTypes } from 'sequelize';
import sequelize from '../db/connection';
import { Beca } from './beca.model';

export const CriterioElegibilidad = sequelize.define('criterioElegibilidad', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    edad_minima: {
        type: DataTypes.INTEGER,
    },
    edad_maxima: {
        type: DataTypes.INTEGER,
    },
    nivel_educativo_requerido: {
        type: DataTypes.STRING,
    },
    pais_residencia_requerido: {
        type: DataTypes.STRING,
    },
    promedio_minimo: {
        type: DataTypes.FLOAT,
    },
    otros_requisitos: {
        type: DataTypes.TEXT,
    },
});

CriterioElegibilidad.belongsTo(Beca, { foreignKey: 'becaId' });
Beca.hasMany(CriterioElegibilidad, { foreignKey: 'becaId' });
