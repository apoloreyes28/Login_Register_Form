/*
Para crear una conexión con la Base de Datos de MongoDB, debo 
copiar la cadena de conexión (URL)
*/

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const EmployeeModel = require('./models/Employee')

const app = express();

app.use(express.json());
// convierte los datos que estamos pasando desde el Front-end (la página web)
// al Back-end (servidor, base de datos) en formato JSON

app.use(cors());

// creamos la conexión a MongoDB 
mongoose.connect("mongodb://localhost:27017/employee");// CMD > ipconfig = 192.168.4.1
// cadena de conexión (URL)
// si no funcion solo reemplazo:                                             nombre de la BdeD
// mongodb://localhost:27017 ----> dirección IP = 'mongodb://127.0.0.1:27017/employee'

// creamos la ruta de Inicio de Sesión y mandamos los datos
app.post('/login', (req, res) => {

    // obtenemos los datos del regitro
    const {email, password} = req.body;

    // usamos el modelo (guía) para encontrar los datos (registros)
    EmployeeModel.findOne({email: email})
    .then(user =>{
        // obtenemos el usuario, si existe
        if(user){
            if(user.password === password){
                res.json("Success")
            }else{
                res.json("The password is incorrect")
            }
        }else{
            // si el usuario no existe
            res.json("No record exited")
        }
    })
})


// creamos la ruta de Registro y mandamos los datos
app.post('/register', (req, res) => {

    EmployeeModel.create(req.body)
    // insertamos los registros (son el valor 'dato' solicitado) del Front-end

    .then(employees => res.json(employees))
    // devolvemos el resultado (la respuesta) en formato JSON
    .catch(err => res.json(err))
})


// ejecutamos nuestro servidor
app.listen(3001, ()=>{ //=  CallBack
    console.log("Server is running")
})
