import { Router } from 'express';
import {
    crearAplicacion,
    obtenerAplicaciones,
    obtenerAplicacion,
    actualizarAplicacion,
    eliminarAplicacion,
} from '../controllers/aplicacion.controller';
import validateToken from './validate-token';

const router = Router();

router.post('/', validateToken, crearAplicacion);
router.get('/', validateToken, obtenerAplicaciones);
router.get('/:id', validateToken, obtenerAplicacion);
router.put('/:id', validateToken, actualizarAplicacion);
router.delete('/:id', validateToken, eliminarAplicacion);

export default router;
