import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

// creamos un enrutador de React
import { useNavigate } from "react-router-dom";

function Signup(){
    // variables para almacenar los datos introducidos en los campos de texto
    // estos son Ganchos = Hooks

    // Nombre = 'Usuario'
    const [name, setName] = useState();
    
    // Email
    const [email, setEmail] = useState();

    // Password
    const [password, setPassword] = useState();

    // Enrutador
    const navigate = useNavigate();// creamos una instancia

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // pasamos los datos
        axios.post('http://localhost:3001/register', {name, email, password})
        .then(result => {console.log(result)
            navigate('/login')

        })
        .catch(err => console.log(err))
    }

    // todas estas clases: d-flex bg-white w-25.... vienen de Bootstrap
    return(
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Name</strong>
                        </label>
                        <input 
                            type="text"
                            placeholder="Enter Name"
                            autoComplete="off"
                            name="email"
                            className="form-control rounded-0" 
                            // e = evento
                            onChange={(e)=> setName(e.target.value)}
                            // le asignamos el valor que estamos escribiendo en el campo de entrada (texto)
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input 
                            type="email"
                            placeholder="Enter Email"
                            autoComplete="off"
                            name="email"
                            className="form-control rounded-0" 
                            // e = evento
                            onChange={(e)=> setEmail(e.target.value)}
                            // le asignamos el valor que estamos escribiendo en el campo de entrada (texto)
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Password</strong>
                        </label>
                        <input 
                            type="password"
                            placeholder="Enter Password"
                            autoComplete="off"
                            name="password"
                            className="form-control rounded-0" 
                            // e = evento
                            onChange={(e)=> setPassword(e.target.value)}
                            // le asignamos el valor que estamos escribiendo en el campo de entrada (texto)
                        />
                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded-0">
                        Register
                    </button>
                </form>
                    <p>Already Have a Account?</p>
                    <Link to="/login" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
                        Login
                    </Link>
            </div>
        </div>
    );
}

export default Signup;