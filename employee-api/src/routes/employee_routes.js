/**
 * Arquivo: controller/employee_routes.js
 * Descrição: Arquivo responsável pelas rotas da API
 * Data: 16/04/2021
 * Author: Carlos Silva
 */

const router = require('express-promise-router')();
const employeeController = require('../controller/employee_controller');

// ==> Definindo as rotas do CRUD - 'Employee'

// ==> Rota responsável por criar um novo 'Colaborador(a)': (POST): localhost:3000/api/employees
router.post('/employees', employeeController.createEmployee);

// ==> Rota responsável por listar todos os 'Colaboradores': (GET): localhost:3000/api/employees
router.get('/employees', employeeController.listAllEmployees);

// ==> Rota responsável por listar um determminado 'Colaboradores' por ID: (GET): localhost:3000/api/employees/:id
router.get('/employees/:id',employeeController.findEmployeeById);

// ==> Rota responsável por atualizar um determinado 'Colaboradores' por ID: (PUT): localhost:3000/api/employees/:id
router.put('/employees/:id',employeeController.updateEmployeeById);

module.exports = router;