import React from "react";
import "./login.css"

export default class login_form extends React.Component {
    render() {
        return (
            <div className="side_form">
                <form>
                    <h1>Registra Tu Cuenta</h1>
                    <label>Nombre
                        <input type="text" placeholder="Ingresa Tu Nombre" />
                    </label>
                    <label>Apellidos
                        <input type="text" placeholder="Ingresa Tu Apellido" />
                    </label>
                    <div className="info">
                        <label>F. de Nacimiento
                            <input type="date" />
                        </label>
                        <label>Grado
                            <input type="number" placeholder="Grado Escolar" />
                        </label>
                    </div>
                    <label>Correo
                        <input type="email" placeholder="Ingresa Tu Correo" />
                    </label>
                    <label>Contraseña
                        <input type="password" placeholder="Ingresa Tu Constraseña" />
                    </label>
                    <button className="log">Iniciar Sesión</button>
                </form>
            </div>
        );
    }
}
