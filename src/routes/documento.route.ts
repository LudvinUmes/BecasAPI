import { Router } from 'express';
import {
    crearDocumento,
    obtenerDocumentos,
    obtenerDocumento,
    actualizarDocumento,
    eliminarDocumento,
} from '../controllers/documento.controller';
import validateToken from './validate-token';

const router = Router();

router.post('/', validateToken, crearDocumento);
router.get('/', validateToken, obtenerDocumentos);
router.get('/:id', validateToken, obtenerDocumento);
router.put('/:id', validateToken, actualizarDocumento);
router.delete('/:id', validateToken, eliminarDocumento);

export default router;
