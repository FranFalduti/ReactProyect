import { NavLink } from "react-router-dom";


export default function NavBar() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink exact to="/" activeClassName="active">Home</NavLink>
                </li>
                <li>
                    <NavLink exact to="/about" activeClassName="active">About</NavLink>
                </li>
                <li>
                    <NavLink exact to="/contact" activeClassName="active">Contact</NavLink>
                </li>
                <li>
                    <NavLink exact to ="/category/:categoryId">Categorias</NavLink>
                </li>
            </ul>
        </nav>
    );
}