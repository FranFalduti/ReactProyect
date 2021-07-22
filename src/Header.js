import NavBar from "./NavBar";


const Header = ({nombre, edad, usuarios}) =>{

    //Destructuring
   // const {nombre, edad} = props


    //const nombre = props.nombre
    //const edad = props.edad

    console.log(nombre);
    console.log(edad);
    console.log(usuarios);

    return (
        <header>
            <h1>E-Commerce</h1>
            <p>Bienvenido {nombre}!</p>
            <NavBar />
        </header>
    )
}

export default Header;