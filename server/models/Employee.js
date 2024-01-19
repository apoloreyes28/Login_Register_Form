// creamos el modelo para enviar los datos

const mongoose = require('mongoose');

// creamos el esquema (modelo) para nuestra tabla
const EmployeeSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

// creamos la tabla
const EmployeeModel = mongoose.model('employees', EmployeeSchema)
// le asignamos el nombre que nos gustaría tener en la Base de Datos

module.exports = EmployeeModel;