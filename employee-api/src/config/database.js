/**
 * Arquivo: config/database.js
 * Descrição: Arquivo responsável pela 'connectionStrings' (Postgres)
 * Data: 16/04/2021
 * Author: Carlos Silva
 */


const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

// ==> Conexão com a Base de dados:
const pool = new Pool({
  connectionString: process.env.POST_URL,
})

pool.on('error', (err, cliente) => {
    console.log('Unexpected error on idle cliente', err);
    process.exit(-1);
})

pool.on('connect', () => {
    console.log('Base de dados conectada com sucesso!');
});

module.exports = {
    query: (text, params) => pool.query(text, params),
};

 