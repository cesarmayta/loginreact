import React from 'react'
import '../styles/login.css'
import Axios from 'axios'

function Login() {
    async function acceso(event){
        const {data} = await Axios.post('https://djangousuariosapi.herokuapp.com/api/token/',{
            username: "cmayta",
            password: "tecsup2021"
        });
        //setUsuario(data.usuario);
        //setToken(data.access)
        console.log("login :",data.access)
    }
    return (
        <div className="login">
            <div className="form-container">
                <h1 className="title">Login de usuario</h1>
                <p className="subtitle">Ingresa tu usuario y clave</p>
                <form onSubmit={acceso} className="form">
                    <label htmlFor="password" className="label">Usuario</label>
                    <input type="text" id="usuario" placeholder="*********" className="input input-password" />
                    <label htmlFor="new-password" className="label">Clave</label>
                    <input type="password" id="new-password" placeholder="*********" className="input input-password" />
                    <input type="submit" defaultValue="Confirm" className="primary-button login-button" />
                </form>
            </div>
        </div>
    )
}

export default Login




