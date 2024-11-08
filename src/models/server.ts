import express from 'express';
import cors from 'cors';

import routesProduct from '../routes/product.route';
import routesUser from '../routes/user.route';
import routesSoicitante from '../routes/solicitante.route';
import routesOrganizacion from '../routes/organizacion.route';
import routesBeca from '../routes/beca.route';
import routesAplicacion from '../routes/aplicacion.route';
import routesCriterio from '../routes/criterio.route';
import routesDocumento from '../routes/documento.route';
import routesNotificacion from '../routes/notificacion.route';

import { Product } from './product.model';
import { User } from './user.model';
import { Aplicacion } from './aplicacion.model';
import { Beca } from './beca.model';
import { CriterioElegibilidad } from './criterioElegibilidad.model';
import { Documento } from './documento.model';
import { Notificacion } from './notificacion.model';
import { Organizacion } from './organizacion.model';
import { Solicitante } from './solicitante.model';
import { swaggerSpec, swaggerUi } from '../config/swagger';
import logRequests from '../middlewares/logRequests';

class Server {
    private app: express.Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.midlewares();
        this.routes();
        this.dbConnect();
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`El server esta corriendo en el puerto: ${this.port}`);
            console.log(
                `Documentación de la API: http://localhost:${this.port}/api/docs`
            );
        });
    }

    routes() {
        this.app.get('/', (req, res) => {
            res.json({
                message: 'Bienvenido al servidor Express',
            });
        });

        this.app.get('/api', (req, res) => {
            res.json({
                message: 'Bienvenido a la API',
            });
        });

        this.app.use('/api/products', routesProduct);
        this.app.use('/api/users', routesUser);
        this.app.use('/api/solicitantes', routesSoicitante);
        this.app.use('/api/organizaciones', routesOrganizacion);
        this.app.use('/api/becas', routesBeca);
        this.app.use('/api/aplicaciones', routesAplicacion);
        this.app.use('/api/criterios', routesCriterio);
        this.app.use('/api/documentos', routesDocumento);
        this.app.use('/api/notificaciones', routesNotificacion);
        this.app.use(
            '/api/docs',
            swaggerUi.serve,
            swaggerUi.setup(swaggerSpec)
        );
    }

    midlewares() {
        this.app.use(express.json());

        this.app.use(cors());

        this.app.use(logRequests);
    }

    async dbConnect() {
        try {
            await Product.sync();
            await Solicitante.sync();
            await Organizacion.sync();
            await User.sync();
            await Beca.sync();
            await Aplicacion.sync();
            await CriterioElegibilidad.sync();
            await Documento.sync();
            await Notificacion.sync();
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    }
}

export default Server;
