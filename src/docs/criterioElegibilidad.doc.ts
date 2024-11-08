// src/docs/criterioElegibilidad.doc.ts

/**
 * @swagger
 * tags:
 *   name: Criterios de Elegibilidad
 *   description: Endpoints para gestionar los criterios de elegibilidad de las becas
 */

/**
 * @swagger
 * /criterios:
 *   post:
 *     summary: Crea un nuevo criterio de elegibilidad
 *     tags: [Criterios de Elegibilidad]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               becaId:
 *                 type: integer
 *                 example: 1
 *               edad_minima:
 *                 type: integer
 *                 example: 18
 *               edad_maxima:
 *                 type: integer
 *                 example: 30
 *               nivel_educativo_requerido:
 *                 type: string
 *                 example: Licenciatura
 *               pais_residencia_requerido:
 *                 type: string
 *                 example: México
 *               promedio_minimo:
 *                 type: number
 *                 format: float
 *                 example: 8.5
 *               otros_requisitos:
 *                 type: string
 *                 example: Carta de recomendación
 *     responses:
 *       201:
 *         description: Criterio de elegibilidad creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CriterioElegibilidad'
 *       500:
 *         description: Error en el servidor
 */

/**
 * @swagger
 * /criterios:
 *   get:
 *     summary: Obtiene una lista paginada de todos los criterios de elegibilidad
 *     tags: [Criterios de Elegibilidad]
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
 *         description: Lista de criterios de elegibilidad
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
 *                 criterios:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/CriterioElegibilidad'
 *       500:
 *         description: Error en el servidor
 */

/**
 * @swagger
 * /criterios/{id}:
 *   get:
 *     summary: Obtiene un criterio de elegibilidad por su ID
 *     tags: [Criterios de Elegibilidad]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del criterio de elegibilidad
 *     responses:
 *       200:
 *         description: Datos del criterio de elegibilidad encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CriterioElegibilidad'
 *       404:
 *         description: Criterio de elegibilidad no encontrado
 *       500:
 *         description: Error en el servidor
 */

/**
 * @swagger
 * /criterios/{id}:
 *   put:
 *     summary: Actualiza un criterio de elegibilidad por su ID
 *     tags: [Criterios de Elegibilidad]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del criterio de elegibilidad
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               edad_minima:
 *                 type: integer
 *               edad_maxima:
 *                 type: integer
 *               nivel_educativo_requerido:
 *                 type: string
 *               pais_residencia_requerido:
 *                 type: string
 *               promedio_minimo:
 *                 type: number
 *                 format: float
 *               otros_requisitos:
 *                 type: string
 *     responses:
 *       200:
 *         description: Criterio de elegibilidad actualizado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CriterioElegibilidad'
 *       404:
 *         description: Criterio de elegibilidad no encontrado
 *       500:
 *         description: Error en el servidor
 */

/**
 * @swagger
 * /criterios/{id}:
 *   delete:
 *     summary: Elimina un criterio de elegibilidad por su ID
 *     tags: [Criterios de Elegibilidad]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del criterio de elegibilidad
 *     responses:
 *       200:
 *         description: Criterio de elegibilidad eliminado correctamente
 *       404:
 *         description: Criterio de elegibilidad no encontrado
 *       500:
 *         description: Error en el servidor
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     CriterioElegibilidad:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         becaId:
 *           type: integer
 *         edad_minima:
 *           type: integer
 *         edad_maxima:
 *           type: integer
 *         nivel_educativo_requerido:
 *           type: string
 *         pais_residencia_requerido:
 *           type: string
 *         promedio_minimo:
 *           type: number
 *           format: float
 *         otros_requisitos:
 *           type: string
 *       example:
 *         id: 1
 *         becaId: 1
 *         edad_minima: 18
 *         edad_maxima: 30
 *         nivel_educativo_requerido: Licenciatura
 *         pais_residencia_requerido: México
 *         promedio_minimo: 8.5
 *         otros_requisitos: Carta de recomendación
 */
