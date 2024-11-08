import { DataTypes } from 'sequelize';
import sequelize from '../db/connection';

export const Solicitante = sequelize.define('solicitante', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING,
    },
    apellido: {
        type: DataTypes.STRING,
    },
    fecha_nacimiento: {
        type: DataTypes.DATE,
    },
    genero: {
        type: DataTypes.STRING,
    },
    pais_residencia: {
        type: DataTypes.STRING,
    },
    nivel_educativo: {
        type: DataTypes.STRING,
    },
    campo_estudio: {
        type: DataTypes.STRING,
    },
});
