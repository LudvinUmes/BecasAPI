// src/docs/documento.doc.ts

/**
 * @swagger
 * tags:
 *   name: Documentos
 *   description: Endpoints para gestionar los documentos de las aplicaciones
 */

/**
 * @swagger
 * /documentos:
 *   post:
 *     summary: Crea un nuevo documento
 *     tags: [Documentos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               aplicacionId:
 *                 type: integer
 *                 example: 1
 *               tipo_documento:
 *                 type: string
 *                 example: Carta de motivación
 *               url_documento:
 *                 type: string
 *                 example: http://misdocumentos.com/carta_motivacion.pdf
 *               fecha_subida:
 *                 type: string
 *                 format: date
 *                 example: 2023-11-01
 *     responses:
 *       201:
 *         description: Documento creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Documento'
 *       500:
 *         description: Error en el servidor
 */

/**
 * @swagger
 * /documentos:
 *   get:
 *     summary: Obtiene una lista paginada de todos los documentos
 *     tags: [Documentos]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Número de la página
 *       - in: query
 *         name: size
 *         schema:
 *           type: integer
 *         description: Cantidad de registros por página
 *     responses:
 *       200:
 *         description: Lista de documentos
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 totalItems:
 *                   type: integer
 *                 totalPages:
 *                   type: integer
 *                 currentPage:
 *                   type: integer
 *                 documentos:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Documento'
 *       500:
 *         description: Error en el servidor
 */

/**
 * @swagger
 * /documentos/{id}:
 *   get:
 *     summary: Obtiene un documento por su ID
 *     tags: [Documentos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del documento
 *     responses:
 *       200:
 *         description: Datos del documento encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Documento'
 *       404:
 *         description: Documento no encontrado
 *       500:
 *         description: Error en el servidor
 */

/**
 * @swagger
 * /documentos/{id}:
 *   put:
 *     summary: Actualiza un documento por su ID
 *     tags: [Documentos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del documento
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               tipo_documento:
 *                 type: string
 *               url_documento:
 *                 type: string
 *               fecha_subida:
 *                 type: string
 *                 format: date
 *     responses:
 *       200:
 *         description: Documento actualizado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Documento'
 *       404:
 *         description: Documento no encontrado
 *       500:
 *         description: Error en el servidor
 */

/**
 * @swagger
 * /documentos/{id}:
 *   delete:
 *     summary: Elimina un documento por su ID
 *     tags: [Documentos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del documento
 *     responses:
 *       200:
 *         description: Documento eliminado correctamente
 *       404:
 *         description: Documento no encontrado
 *       500:
 *         description: Error en el servidor
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Documento:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         aplicacionId:
 *           type: integer
 *         tipo_documento:
 *           type: string
 *         url_documento:
 *           type: string
 *         fecha_subida:
 *           type: string
 *           format: date
 *       example:
 *         id: 1
 *         aplicacionId: 1
 *         tipo_documento: Carta de motivación
 *         url_documento: http://misdocumentos.com/carta_motivacion.pdf
 *         fecha_subida: 2023-11-01
 */
