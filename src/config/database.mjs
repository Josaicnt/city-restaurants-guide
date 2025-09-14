import pkg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pkg;

// Conexión a la base de datos
export const connection = new Pool({
	user: process.env.DATABASE_USERNAME,
	host: process.env.DATABASE_HOST,
	database: process.env.DATABASE_NAME,
	password: process.env.DATABASE_PASSWORD,
	port: process.env.DATABASE_PORT
});



