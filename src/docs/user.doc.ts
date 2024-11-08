// docs/swaggerUserDocs.ts

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Documentación para el manejo de usuarios
 */

/**
 * @swagger
 * paths:
 *   /users:
 *     get:
 *       operationId: obtenerUsuarios
 *       summary: Obtiene una lista de todos los usuarios
 *       tags: [Users]
 *       parameters:
 *         - in: query
 *           name: page
 *           schema:
 *             type: integer
 *           description: Número de la página a obtener
 *         - in: query
 *           name: size
 *           schema:
 *             type: integer
 *           description: Tamaño de la página
 *       responses:
 *         200:
 *           description: Lista de usuarios paginada
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/User'
 *         500:
 *           description: Error en el servidor
 *
 *     post:
 *       operationId: crearUsuario
 *       summary: Crea un nuevo usuario
 *       tags: [Users]
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 username:
 *                   type: string
 *                   example: johndoe
 *                 password:
 *                   type: string
 *                   example: mypassword
 *                 solicitanteId:
 *                   type: integer
 *                   example: 1
 *       responses:
 *         201:
 *           description: Usuario creado exitosamente
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/User'
 *         400:
 *           description: Datos de solicitud incorrectos
 *         500:
 *           description: Error en el servidor
 *
 *   /users/{id}:
 *     get:
 *       operationId: obtenerUsuario
 *       summary: Obtiene un usuario por su ID
 *       tags: [Users]
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           schema:
 *             type: integer
 *           description: ID del usuario
 *       responses:
 *         200:
 *           description: Datos del usuario encontrado
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/User'
 *         404:
 *           description: Usuario no encontrado
 *         500:
 *           description: Error en el servidor
 *
 *     put:
 *       operationId: actualizarUsuario
 *       summary: Actualiza un usuario por su ID
 *       tags: [Users]
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           schema:
 *             type: integer
 *           description: ID del usuario
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 username:
 *                   type: string
 *                   example: john_updated
 *                 password:
 *                   type: string
 *                   example: newpassword
 *       responses:
 *         200:
 *           description: Usuario actualizado
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/User'
 *         404:
 *           description: Usuario no encontrado
 *         500:
 *           description: Error en el servidor
 *
 *     delete:
 *       operationId: eliminarUsuario
 *       summary: Elimina un usuario por su ID
 *       tags: [Users]
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           schema:
 *             type: integer
 *           description: ID del usuario
 *       responses:
 *         200:
 *           description: Usuario eliminado correctamente
 *         404:
 *           description: Usuario no encontrado
 *         500:
 *           description: Error en el servidor
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         username:
 *           type: string
 *         password:
 *           type: string
 *         solicitanteId:
 *           type: integer
 *         organizacionId:
 *           type: integer
 *       example:
 *         id: 1
 *         username: johndoe
 *         password: hashed_password
 *         solicitanteId: 1
 *         organizacionId: null
 */
