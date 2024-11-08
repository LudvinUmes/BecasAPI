import { Request, Response } from 'express';
import { CriterioElegibilidad } from '../models/criterioElegibilidad.model';

export const crearCriterio = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const criterio = await CriterioElegibilidad.create(req.body);
        res.status(201).json(criterio);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

export const obtenerCriterios = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const page = parseInt(req.query.page as string) || 1;
        const size = parseInt(req.query.size as string) || 10;
        const offset = (page - 1) * size;

        const { count, rows } = await CriterioElegibilidad.findAndCountAll({
            limit: size,
            offset,
        });

        res.json({
            totalItems: count,
            totalPages: Math.ceil(count / size),
            currentPage: page,
            criterios: rows,
        });
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

export const obtenerCriterio = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const criterio = await CriterioElegibilidad.findByPk(req.params.id);
        if (!criterio) {
            res.status(404).json({
                error: 'Criterio de elegibilidad no encontrado',
            });
            return;
        }
        res.json(criterio);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

export const actualizarCriterio = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const criterio = await CriterioElegibilidad.findByPk(req.params.id);
        if (!criterio) {
            res.status(404).json({
                error: 'Criterio de elegibilidad no encontrado',
            });
            return;
        }
        await criterio.update(req.body);
        res.json(criterio);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

export const eliminarCriterio = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const criterio = await CriterioElegibilidad.findByPk(req.params.id);
        if (!criterio) {
            res.status(404).json({
                error: 'Criterio de elegibilidad no encontrado',
            });
            return;
        }
        await criterio.destroy();
        res.json({ message: 'Criterio de elegibilidad eliminado' });
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};
