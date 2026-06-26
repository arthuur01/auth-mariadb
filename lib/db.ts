import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT) || 3307,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
}
);
export default pool;

/* Usar um pool (em vez de abrir uma conexão nova a cada requisição) 
é importante, porque o Next.js cria várias instâncias do servidor e 
isso evita esgotar as conexões do banco.

Pool é um cache de database connections guardada para futura requisições ao 
invés de ficar fechando e abrindo a conexão toda vez que precisa comunicar 
com a database
*/