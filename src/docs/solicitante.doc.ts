// src/docs/solicitante.doc.ts

/**
 * @swagger
 * tags:
 *   name: Solicitantes
 *   description: Endpoints para gestionar los solicitantes
 */

/**
 * @swagger
 * /solicitantes:
 *   post:
 *     summary: Crea un nuevo solicitante
 *     tags: [Solicitantes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: Juan
 *               apellido:
 *                 type: string
 *                 example: Pérez
 *               fecha_nacimiento:
 *                 type: string
 *                 format: date
 *                 example: 1995-04-12
 *               genero:
 *                 type: string
 *                 example: M
 *               pais_residencia:
 *                 type: string
 *                 example: México
 *               nivel_educativo:
 *                 type: string
 *                 example: Licenciatura
 *               campo_estudio:
 *                 type: string
 *                 example: Ingeniería
 *     responses:
 *       201:
 *         description: Solicitante creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Solicitante'
 *       500:
 *         description: Error en el servidor
 */

/**
 * @swagger
 * /solicitantes:
 *   get:
 *     summary: Obtiene una lista paginada de todos los solicitantes
 *     tags: [Solicitantes]
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
 *         description: Lista de solicitantes
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
 *                 solicitantes:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Solicitante'
 *       500:
 *         description: Error en el servidor
 */

/**
 * @swagger
 * /solicitantes/{id}:
 *   get:
 *     summary: Obtiene un solicitante por su ID
 *     tags: [Solicitantes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del solicitante
 *     responses:
 *       200:
 *         description: Datos del solicitante encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Solicitante'
 *       404:
 *         description: Solicitante no encontrado
 *       500:
 *         description: Error en el servidor
 */

/**
 * @swagger
 * /solicitantes/{id}:
 *   put:
 *     summary: Actualiza un solicitante por su ID
 *     tags: [Solicitantes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del solicitante
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               apellido:
 *                 type: string
 *               fecha_nacimiento:
 *                 type: string
 *                 format: date
 *               genero:
 *                 type: string
 *               pais_residencia:
 *                 type: string
 *               nivel_educativo:
 *                 type: string
 *               campo_estudio:
 *                 type: string
 *     responses:
 *       200:
 *         description: Solicitante actualizado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Solicitante'
 *       404:
 *         description: Solicitante no encontrado
 *       500:
 *         description: Error en el servidor
 */

/**
 * @swagger
 * /solicitantes/{id}:
 *   delete:
 *     summary: Elimina un solicitante por su ID
 *     tags: [Solicitantes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del solicitante
 *     responses:
 *       200:
 *         description: Solicitante eliminado correctamente
 *       404:
 *         description: Solicitante no encontrado
 *       500:
 *         description: Error en el servidor
 */
/**
 * @swagger
 * /solicitantes/{solicitanteId}/becas:
 *   get:
 *     summary: Obtiene todas las becas a las que un solicitante ha aplicado
 *     tags: [Becas, Solicitantes]
 *     parameters:
 *       - in: path
 *         name: solicitanteId
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del solicitante
 *     responses:
 *       200:
 *         description: Lista de becas a las que el solicitante ha aplicado
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Beca'
 *       404:
 *         description: Solicitante no encontrado
 *       500:
 *         description: Error en el servidor
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Solicitante:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         nombre:
 *           type: string
 *         apellido:
 *           type: string
 *         fecha_nacimiento:
 *           type: string
 *           format: date
 *         genero:
 *           type: string
 *         pais_residencia:
 *           type: string
 *         nivel_educativo:
 *           type: string
 *         campo_estudio:
 *           type: string
 *       example:
 *         id: 1
 *         nombre: Juan
 *         apellido: Pérez
 *         fecha_nacimiento: 1995-04-12
 *         genero: M
 *         pais_residencia: México
 *         nivel_educativo: Licenciatura
 *         campo_estudio: Ingeniería
 */
