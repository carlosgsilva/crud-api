/**
 * Arquivo: server.js
 * Descrição: Arquivo responsável por toda configuração e execução do Back-End (Employee)
 * Data: 15/04/2021
 * Author: Carlos Silva
 */

const app = require('./src/app');

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Aplicação sendo executada na porta...:', port)
});
