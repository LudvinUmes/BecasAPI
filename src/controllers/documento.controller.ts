import { Request, Response } from 'express';
import { Documento } from '../models/documento.model';

export const crearDocumento = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const documento = await Documento.create(req.body);
        res.status(201).json(documento);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

export const obtenerDocumentos = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const page = parseInt(req.query.page as string) || 1;
        const size = parseInt(req.query.size as string) || 10;
        const offset = (page - 1) * size;

        const { count, rows } = await Documento.findAndCountAll({
            limit: size,
            offset,
        });

        res.json({
            totalItems: count,
            totalPages: Math.ceil(count / size),
            currentPage: page,
            documentos: rows,
        });
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

export const obtenerDocumento = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const documento = await Documento.findByPk(req.params.id);
        if (!documento) {
            res.status(404).json({ error: 'Documento no encontrado' });
            return;
        }
        res.json(documento);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

export const actualizarDocumento = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const documento = await Documento.findByPk(req.params.id);
        if (!documento) {
            res.status(404).json({ error: 'Documento no encontrado' });
            return;
        }
        await documento.update(req.body);
        res.json(documento);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

export const eliminarDocumento = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const documento = await Documento.findByPk(req.params.id);
        if (!documento) {
            res.status(404).json({ error: 'Documento no encontrado' });
            return;
        }
        await documento.destroy();
        res.json({ message: 'Documento eliminado' });
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};
