/**
 * Arquivo: routes/index.js
 * Descrição: Arquivo responsável pela chamada da API na aplicação no lado do Back-end
 * Data: 15/04/2021
 * Author: Carlos Silva
 */

const express = require('express');

const router = express.Router();

router.get('/api', (req, res) => {
    res.status(200).send({
        success: 'true',
        message: 'Seja bem-vindo(a) a API Node.js',
        version: '1.0.0'
    });
});

module.exports = router;
