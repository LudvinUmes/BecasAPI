import { Request, Response } from 'express';
import { Aplicacion } from '../models/aplicacion.model';

export const crearAplicacion = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const aplicacion = await Aplicacion.create(req.body);
        res.status(201).json(aplicacion);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

export const obtenerAplicaciones = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const page = parseInt(req.query.page as string) || 1;
        const size = parseInt(req.query.size as string) || 10;
        const offset = (page - 1) * size;

        const { count, rows } = await Aplicacion.findAndCountAll({
            limit: size,
            offset,
        });

        res.json({
            totalItems: count,
            totalPages: Math.ceil(count / size),
            currentPage: page,
            aplicaciones: rows,
        });
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

export const obtenerAplicacion = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const aplicacion = await Aplicacion.findByPk(req.params.id);
        if (!aplicacion) {
            res.status(404).json({ error: 'Aplicación no encontrada' });
            return;
        }
        res.json(aplicacion);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

export const actualizarAplicacion = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const aplicacion = await Aplicacion.findByPk(req.params.id);
        if (!aplicacion) {
            res.status(404).json({ error: 'Aplicación no encontrada' });
            return;
        }
        await aplicacion.update(req.body);
        res.json(aplicacion);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

export const eliminarAplicacion = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const aplicacion = await Aplicacion.findByPk(req.params.id);
        if (!aplicacion) {
            res.status(404).json({ error: 'Aplicación no encontrada' });
            return;
        }
        await aplicacion.destroy();
        res.json({ message: 'Aplicación eliminada' });
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};
