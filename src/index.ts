import Server from './models/server';
import dotenv from 'dotenv';

dotenv.config();

const nombre: string = 'Ludvin';

console.log(nombre);
console.log(nombre, 'Hola 2');
const server = new Server();
