import { Router } from 'express';
import {
    actualizarOrganizacion,
    crearOrganizacion,
    eliminarOrganizacion,
    obtenerOrganizacion,
    obtenerOrganizaciones,
} from '../controllers/organizacion.controller';
import validateToken from './validate-token';

const router = Router();

router.post('/', validateToken, crearOrganizacion);
router.get('/', obtenerOrganizaciones);
router.get('/:id', obtenerOrganizacion);
router.put('/:id', validateToken, actualizarOrganizacion);
router.delete('/:id', validateToken, eliminarOrganizacion);

export default router;
