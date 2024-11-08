import { DataTypes } from 'sequelize';
import sequelize from '../db/connection';
import { Solicitante } from './solicitante.model';
import { Organizacion } from './organizacion.model';

export const User = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    solicitanteId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: Solicitante,
            key: 'id',
        },
    },
    organizacionId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: Organizacion,
            key: 'id',
        },
    },
});

User.belongsTo(Solicitante, {
    foreignKey: 'solicitanteId',
    constraints: false,
});
User.belongsTo(Organizacion, {
    foreignKey: 'organizacionId',
    constraints: false,
});
