// src/docs/organizacion.doc.ts

/**
 * @swagger
 * tags:
 *   name: Organizaciones
 *   description: Endpoints para gestionar las organizaciones
 */

/**
 * @swagger
 * /organizaciones:
 *   post:
 *     summary: Crea una nueva organización
 *     tags: [Organizaciones]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: Fundación Educativa
 *               tipo:
 *                 type: string
 *                 example: ONG
 *               pais:
 *                 type: string
 *                 example: México
 *               contacto_email:
 *                 type: string
 *                 example: contacto@fundacion.com
 *               sitio_web:
 *                 type: string
 *                 example: http://fundacion.com
 *               telefono:
 *                 type: string
 *                 example: 555-1234
 *     responses:
 *       201:
 *         description: Organización creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Organizacion'
 *       500:
 *         description: Error en el servidor
 */

/**
 * @swagger
 * /organizaciones:
 *   get:
 *     summary: Obtiene una lista paginada de todas las organizaciones
 *     tags: [Organizaciones]
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
 *         description: Lista de organizaciones
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
 *                 organizaciones:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Organizacion'
 *       500:
 *         description: Error en el servidor
 */

/**
 * @swagger
 * /organizaciones/{id}:
 *   get:
 *     summary: Obtiene una organización por su ID
 *     tags: [Organizaciones]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la organización
 *     responses:
 *       200:
 *         description: Datos de la organización encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Organizacion'
 *       404:
 *         description: Organización no encontrada
 *       500:
 *         description: Error en el servidor
 */

/**
 * @swagger
 * /organizaciones/{id}:
 *   put:
 *     summary: Actualiza una organización por su ID
 *     tags: [Organizaciones]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la organización
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               tipo:
 *                 type: string
 *               pais:
 *                 type: string
 *               contacto_email:
 *                 type: string
 *               sitio_web:
 *                 type: string
 *               telefono:
 *                 type: string
 *     responses:
 *       200:
 *         description: Organización actualizada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Organizacion'
 *       404:
 *         description: Organización no encontrada
 *       500:
 *         description: Error en el servidor
 */

/**
 * @swagger
 * /organizaciones/{id}:
 *   delete:
 *     summary: Elimina una organización por su ID
 *     tags: [Organizaciones]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la organización
 *     responses:
 *       200:
 *         description: Organización eliminada correctamente
 *       404:
 *         description: Organización no encontrada
 *       500:
 *         description: Error en el servidor
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Organizacion:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         nombre:
 *           type: string
 *         tipo:
 *           type: string
 *         pais:
 *           type: string
 *         contacto_email:
 *           type: string
 *         sitio_web:
 *           type: string
 *         telefono:
 *           type: string
 *       example:
 *         id: 1
 *         nombre: Fundación Educativa
 *         tipo: ONG
 *         pais: México
 *         contacto_email: contacto@fundacion.com
 *         sitio_web: http://fundacion.com
 *         telefono: 555-1234
 */
