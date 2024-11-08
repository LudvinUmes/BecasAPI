// src/docs/aplicacion.doc.ts

/**
 * @swagger
 * tags:
 *   name: Aplicaciones
 *   description: Endpoints para gestionar las aplicaciones a becas
 */

/**
 * @swagger
 * /aplicaciones:
 *   post:
 *     summary: Crea una nueva aplicación
 *     tags: [Aplicaciones]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               solicitanteId:
 *                 type: integer
 *                 example: 1
 *               becaId:
 *                 type: integer
 *                 example: 1
 *               fecha_aplicacion:
 *                 type: string
 *                 format: date
 *                 example: 2023-11-01
 *               estado:
 *                 type: string
 *                 example: "en revision"
 *               nota:
 *                 type: string
 *                 example: "Primer intento de aplicación"
 *     responses:
 *       201:
 *         description: Aplicación creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Aplicacion'
 *       500:
 *         description: Error en el servidor
 */

/**
 * @swagger
 * /aplicaciones:
 *   get:
 *     summary: Obtiene una lista paginada de todas las aplicaciones
 *     tags: [Aplicaciones]
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
 *         description: Lista de aplicaciones
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
 *                 aplicaciones:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Aplicacion'
 *       500:
 *         description: Error en el servidor
 */

/**
 * @swagger
 * /aplicaciones/{id}:
 *   get:
 *     summary: Obtiene una aplicación por su ID
 *     tags: [Aplicaciones]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la aplicación
 *     responses:
 *       200:
 *         description: Datos de la aplicación encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Aplicacion'
 *       404:
 *         description: Aplicación no encontrada
 *       500:
 *         description: Error en el servidor
 */

/**
 * @swagger
 * /aplicaciones/{id}:
 *   put:
 *     summary: Actualiza una aplicación por su ID
 *     tags: [Aplicaciones]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la aplicación
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               estado:
 *                 type: string
 *                 example: "aceptada"
 *               nota:
 *                 type: string
 *                 example: "Aplicación revisada y aceptada"
 *     responses:
 *       200:
 *         description: Aplicación actualizada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Aplicacion'
 *       404:
 *         description: Aplicación no encontrada
 *       500:
 *         description: Error en el servidor
 */

/**
 * @swagger
 * /aplicaciones/{id}:
 *   delete:
 *     summary: Elimina una aplicación por su ID
 *     tags: [Aplicaciones]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la aplicación
 *     responses:
 *       200:
 *         description: Aplicación eliminada correctamente
 *       404:
 *         description: Aplicación no encontrada
 *       500:
 *         description: Error en el servidor
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Aplicacion:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         solicitanteId:
 *           type: integer
 *         becaId:
 *           type: integer
 *         fecha_aplicacion:
 *           type: string
 *           format: date
 *         estado:
 *           type: string
 *         nota:
 *           type: string
 *       example:
 *         id: 1
 *         solicitanteId: 1
 *         becaId: 1
 *         fecha_aplicacion: 2023-11-01
 *         estado: "en revision"
 *         nota: "Primer intento de aplicación"
 */
