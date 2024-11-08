import { Request, Response, NextFunction } from 'express';

const logRequests = (req: Request, res: Response, next: NextFunction) => {
    const { method, url } = req;
    const start = Date.now();

    // Continuamos con la siguiente función de middleware o ruta
    res.on('finish', () => {
        const duration = Date.now() - start;
        console.log(
            `[${new Date().toISOString()}] ${method} ${url} - ${res.statusCode} - ${duration}ms`
        );
    });

    next();
};

export default logRequests;
