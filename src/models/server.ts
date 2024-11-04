import express from 'express';

class Server {
  private app: express.Application;
  private port: string;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || '30001';
    this.listen();
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`El server esta corriendo en el puerto: ${this.port}`);
    });
  }
}

export default Server;
