import { Router } from 'express';
import {
    crearCriterio,
    obtenerCriterios,
    obtenerCriterio,
    actualizarCriterio,
    eliminarCriterio,
} from '../controllers/criterioEligibilidad.controller';
import validateToken from './validate-token';

const router = Router();

router.post('/', validateToken, crearCriterio);
router.get('/', validateToken, obtenerCriterios);
router.get('/:id', validateToken, obtenerCriterio);
router.put('/:id', validateToken, actualizarCriterio);
router.delete('/:id', validateToken, eliminarCriterio);

export default router;
