import mysql from 'mysql2/promise';

async function test() {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'authmariadb',
    port: 3307,
  });

  console.log('Conectado!');
  await connection.end();
}

test().catch(console.error);