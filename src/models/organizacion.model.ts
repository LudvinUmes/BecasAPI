import { DataTypes } from 'sequelize';
import sequelize from '../db/connection';

export const Organizacion = sequelize.define('organizacion', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING,
    },
    tipo: {
        type: DataTypes.STRING,
    },
    pais: {
        type: DataTypes.STRING,
    },
    contacto_email: {
        type: DataTypes.STRING,
    },
    sitio_web: {
        type: DataTypes.STRING,
    },
    telefono: {
        type: DataTypes.STRING,
    },
});
