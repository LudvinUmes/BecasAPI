import { Router } from 'express';
import {
    crearBeca,
    obtenerBecas,
    obtenerBeca,
    actualizarBeca,
    eliminarBeca,
    obtenerSolicitantesPorBeca,
} from '../controllers/beca.controller';
import validateToken from './validate-token';

const router = Router();

router.post('/', validateToken, crearBeca);
router.get('/', obtenerBecas);
router.get('/:id', obtenerBeca);
router.put('/:id', validateToken, actualizarBeca);
router.delete('/:id', validateToken, eliminarBeca);
router.get('/:becaId/solicitantes', obtenerSolicitantesPorBeca);

export default router;
