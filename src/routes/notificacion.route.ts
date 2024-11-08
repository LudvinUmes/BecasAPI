import { Router } from 'express';
import {
    crearNotificacion,
    obtenerNotificaciones,
    obtenerNotificacion,
    actualizarNotificacion,
    eliminarNotificacion,
} from '../controllers/notificacion.controller';
import validateToken from './validate-token';

const router = Router();

router.post('/', validateToken, crearNotificacion);
router.get('/', validateToken, obtenerNotificaciones);
router.get('/:id', validateToken, obtenerNotificacion);
router.put('/:id', validateToken, actualizarNotificacion);
router.delete('/:id', validateToken, eliminarNotificacion);

export default router;
