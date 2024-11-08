import { Request, Response } from 'express';
import { Notificacion } from '../models/notificacion.model';

export const crearNotificacion = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const notificacion = await Notificacion.create(req.body);
        res.status(201).json(notificacion);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

export const obtenerNotificaciones = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const page = parseInt(req.query.page as string) || 1;
        const size = parseInt(req.query.size as string) || 10;
        const offset = (page - 1) * size;

        const { count, rows } = await Notificacion.findAndCountAll({
            limit: size,
            offset,
        });

        res.json({
            totalItems: count,
            totalPages: Math.ceil(count / size),
            currentPage: page,
            notificaciones: rows,
        });
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

export const obtenerNotificacion = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const notificacion = await Notificacion.findByPk(req.params.id);
        if (!notificacion) {
            res.status(404).json({ error: 'Notificación no encontrada' });
            return;
        }
        res.json(notificacion);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

export const actualizarNotificacion = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const notificacion = await Notificacion.findByPk(req.params.id);
        if (!notificacion) {
            res.status(404).json({ error: 'Notificación no encontrada' });
            return;
        }
        await notificacion.update(req.body);
        res.json(notificacion);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

export const eliminarNotificacion = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const notificacion = await Notificacion.findByPk(req.params.id);
        if (!notificacion) {
            res.status(404).json({ error: 'Notificación no encontrada' });
            return;
        }
        await notificacion.destroy();
        res.json({ message: 'Notificación eliminada' });
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};
