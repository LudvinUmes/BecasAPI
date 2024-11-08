import { Request, Response } from 'express';
import { Beca } from '../models/beca.model';
import { Aplicacion } from '../models/aplicacion.model';
import { Solicitante } from '../models/solicitante.model';

export const crearBeca = async (req: Request, res: Response): Promise<void> => {
    try {
        const beca = await Beca.create(req.body);
        res.status(201).json(beca);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

export const obtenerBecas = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const page = parseInt(req.query.page as string) || 1;
        const size = parseInt(req.query.size as string) || 10;
        const offset = (page - 1) * size;

        const { count, rows } = await Beca.findAndCountAll({
            limit: size,
            offset,
        });

        res.json({
            totalItems: count,
            totalPages: Math.ceil(count / size),
            currentPage: page,
            becas: rows,
        });
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

// Obtener, actualizar y eliminar beca sin paginación
export const obtenerBeca = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const beca = await Beca.findByPk(req.params.id);
        if (!beca) {
            res.status(404).json({ error: 'Beca no encontrada' });
            return;
        }
        res.json(beca);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

export const actualizarBeca = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const beca = await Beca.findByPk(req.params.id);
        if (!beca) {
            res.status(404).json({ error: 'Beca no encontrada' });
            return;
        }
        await beca.update(req.body);
        res.json(beca);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

export const eliminarBeca = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const beca = await Beca.findByPk(req.params.id);
        if (!beca) {
            res.status(404).json({ error: 'Beca no encontrada' });
            return;
        }
        await beca.destroy();
        res.json({ message: 'Beca eliminada' });
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

export const obtenerSolicitantesPorBeca = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const becaId = req.params.becaId;

        const beca = await Beca.findByPk(becaId, {
            include: [
                {
                    model: Aplicacion,
                    include: [
                        {
                            model: Solicitante,
                            attributes: [
                                'id',
                                'nombre',
                                'apellido',
                                'fecha_nacimiento',
                                'genero',
                                'pais_residencia',
                            ],
                        },
                    ],
                },
            ],
        });

        if (!beca) {
            res.status(404).json({ error: 'Beca no encontrada' });
            return;
        }

        const solicitantes = (beca as any).aplicacions.map(
            (aplicacion: any) => aplicacion.solicitante
        );
        res.json(solicitantes);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};
