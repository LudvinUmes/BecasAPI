import { Router } from 'express';
import {
    actualizarSolicitante,
    crearSolicitante,
    eliminarSolicitante,
    obtenerBecasPorSolicitante,
    obtenerSolicitante,
    obtenerSolicitantes,
} from '../controllers/solicitante.controller';
import validateToken from './validate-token';

const router = Router();

router.post('/', validateToken, crearSolicitante);
router.get('/', validateToken, obtenerSolicitantes);
router.get('/:id', validateToken, obtenerSolicitante);
router.put('/:id', validateToken, actualizarSolicitante);
router.delete('/:id', validateToken, eliminarSolicitante);
router.get('/:solicitanteId/becas', validateToken, obtenerBecasPorSolicitante);

export default router;
