import { NavLink } from "react-router-dom";

const Header = ({nombre, edad, usuarios}) =>{

    console.log(nombre);
    console.log(edad);
    console.log(usuarios);

    return (
        <header>
            <NavLink to="/" exact>
                <h1>E-Commerce</h1>
            </NavLink>
            <p>Bienvenido {nombre}!</p>
        </header>
    );
}

export default Header;