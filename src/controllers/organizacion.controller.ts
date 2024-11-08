import { Request, Response } from 'express';
import { Organizacion } from '../models/organizacion.model';

export const crearOrganizacion = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const organizacion = await Organizacion.create(req.body);
        res.status(201).json(organizacion);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

export const obtenerOrganizaciones = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const page = parseInt(req.query.page as string) || 1;
        const size = parseInt(req.query.size as string) || 10;
        const offset = (page - 1) * size;

        const { count, rows } = await Organizacion.findAndCountAll({
            limit: size,
            offset,
        });

        res.json({
            totalItems: count,
            totalPages: Math.ceil(count / size),
            currentPage: page,
            organizaciones: rows,
        });
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

export const obtenerOrganizacion = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const organizacion = await Organizacion.findByPk(req.params.id);
        if (!organizacion) {
            res.status(404).json({ error: 'Organización no encontrada' });
            return;
        }
        res.json(organizacion);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

export const actualizarOrganizacion = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const organizacion = await Organizacion.findByPk(req.params.id);
        if (!organizacion) {
            res.status(404).json({ error: 'Organización no encontrada' });
            return;
        }
        await organizacion.update(req.body);
        res.json(organizacion);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

export const eliminarOrganizacion = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const organizacion = await Organizacion.findByPk(req.params.id);
        if (!organizacion) {
            res.status(404).json({ error: 'Organización no encontrada' });
            return;
        }
        await organizacion.destroy();
        res.json({ message: 'Organización eliminada' });
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};
