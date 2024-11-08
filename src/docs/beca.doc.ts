// src/docs/beca.doc.ts

/**
 * @swagger
 * tags:
 *   name: Becas
 *   description: Endpoints para gestionar las becas
 */

/**
 * @swagger
 * /becas:
 *   post:
 *     summary: Crea una nueva beca
 *     tags: [Becas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre_beca:
 *                 type: string
 *                 example: Beca de Excelencia
 *               descripcion:
 *                 type: string
 *                 example: "Beca destinada a estudiantes destacados"
 *               monto:
 *                 type: number
 *                 example: 2000
 *               fecha_inicio:
 *                 type: string
 *                 format: date
 *                 example: 2024-01-01
 *               fecha_fin:
 *                 type: string
 *                 format: date
 *                 example: 2024-12-31
 *               pais_destino:
 *                 type: string
 *                 example: México
 *               nivel_academico:
 *                 type: string
 *                 example: Maestría
 *               organizacionId:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       201:
 *         description: Beca creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Beca'
 *       500:
 *         description: Error en el servidor
 */

/**
 * @swagger
 * /becas:
 *   get:
 *     summary: Obtiene una lista paginada de todas las becas
 *     tags: [Becas]
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
 *         description: Lista de becas
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
 *                 becas:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Beca'
 *       500:
 *         description: Error en el servidor
 */

/**
 * @swagger
 * /becas/{id}:
 *   get:
 *     summary: Obtiene una beca por su ID
 *     tags: [Becas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la beca
 *     responses:
 *       200:
 *         description: Datos de la beca encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Beca'
 *       404:
 *         description: Beca no encontrada
 *       500:
 *         description: Error en el servidor
 */

/**
 * @swagger
 * /becas/{id}:
 *   put:
 *     summary: Actualiza una beca por su ID
 *     tags: [Becas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la beca
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre_beca:
 *                 type: string
 *               descripcion:
 *                 type: string
 *               monto:
 *                 type: number
 *               fecha_inicio:
 *                 type: string
 *                 format: date
 *               fecha_fin:
 *                 type: string
 *                 format: date
 *               pais_destino:
 *                 type: string
 *               nivel_academico:
 *                 type: string
 *               organizacionId:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Beca actualizada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Beca'
 *       404:
 *         description: Beca no encontrada
 *       500:
 *         description: Error en el servidor
 */

/**
 * @swagger
 * /becas/{id}:
 *   delete:
 *     summary: Elimina una beca por su ID
 *     tags: [Becas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la beca
 *     responses:
 *       200:
 *         description: Beca eliminada correctamente
 *       404:
 *         description: Beca no encontrada
 *       500:
 *         description: Error en el servidor
 */

/**
 * @swagger
 * /becas/{becaId}/solicitantes:
 *   get:
 *     summary: Obtiene todos los solicitantes que han aplicado a una beca específica
 *     tags: [Becas]
 *     parameters:
 *       - in: path
 *         name: becaId
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la beca
 *     responses:
 *       200:
 *         description: Lista de solicitantes que han aplicado a la beca
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Solicitante'
 *       404:
 *         description: Beca no encontrada
 *       500:
 *         description: Error en el servidor
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Beca:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         nombre_beca:
 *           type: string
 *         descripcion:
 *           type: string
 *         monto:
 *           type: number
 *         fecha_inicio:
 *           type: string
 *           format: date
 *         fecha_fin:
 *           type: string
 *           format: date
 *         pais_destino:
 *           type: string
 *         nivel_academico:
 *           type: string
 *         organizacionId:
 *           type: integer
 *       example:
 *         id: 1
 *         nombre_beca: Beca de Excelencia
 *         descripcion: "Beca destinada a estudiantes destacados"
 *         monto: 2000
 *         fecha_inicio: 2024-01-01
 *         fecha_fin: 2024-12-31
 *         pais_destino: México
 *         nivel_academico: Maestría
 *         organizacionId: 1
 */
