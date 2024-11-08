import { Request, Response } from 'express';
import { Solicitante } from '../models/solicitante.model';
import { Aplicacion } from '../models/aplicacion.model';
import { Beca } from '../models/beca.model';

export const crearSolicitante = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const solicitante = await Solicitante.create(req.body);
        res.status(201).json(solicitante);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

export const obtenerSolicitantes = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const page = parseInt(req.query.page as string) || 1;
        const size = parseInt(req.query.size as string) || 10;
        const offset = (page - 1) * size;

        const { count, rows } = await Solicitante.findAndCountAll({
            limit: size,
            offset,
        });

        res.json({
            totalItems: count,
            totalPages: Math.ceil(count / size),
            currentPage: page,
            solicitantes: rows,
        });
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

export const obtenerSolicitante = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const solicitante = await Solicitante.findByPk(req.params.id);
        if (!solicitante) {
            res.status(404).json({ error: 'Solicitante no encontrado' });
            return;
        }
        res.json(solicitante);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

export const actualizarSolicitante = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const solicitante = await Solicitante.findByPk(req.params.id);
        if (!solicitante) {
            res.status(404).json({ error: 'Solicitante no encontrado' });
            return;
        }
        await solicitante.update(req.body);
        res.json(solicitante);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

export const eliminarSolicitante = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const solicitante = await Solicitante.findByPk(req.params.id);
        if (!solicitante) {
            res.status(404).json({ error: 'Solicitante no encontrado' });
            return;
        }
        await solicitante.destroy();
        res.json({ message: 'Solicitante eliminado' });
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

export const obtenerBecasPorSolicitante = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const solicitanteId = req.params.solicitanteId;

        const solicitante = await Solicitante.findByPk(solicitanteId, {
            include: [
                {
                    model: Aplicacion,
                    include: [
                        {
                            model: Beca,
                            attributes: [
                                'id',
                                'nombre_beca',
                                'descripcion',
                                'monto',
                                'fecha_inicio',
                                'fecha_fin',
                            ],
                        },
                    ],
                },
            ],
        });

        if (!solicitante) {
            res.status(404).json({ error: 'Solicitante no encontrado' });
            return;
        }
        console.log(solicitante);
        console.log('aplicaciones', (solicitante as any).aplicacions);

        const becas = (solicitante as any).aplicacions.map(
            (aplicacion: any) => aplicacion.beca
        );
        res.json(becas);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};
