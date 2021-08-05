import {useState} from "react";

const ItemCount = ({ stock , inicial , alAgregar }) => {

    const [contador,setContador] = useState(inicial);

    const aumentarContador = () => {
        if(contador < stock){
            setContador(contador + 1);
        }
    };

    const restarContador = () => {
        if(contador > 1){
            setContador(contador - 1);
        }
    }

    const confirmar = () => {
        if(stock > 0){
            alAgregar(contador);
        }
    }

    return (
        <>
            <p>Contador Actual : {contador}</p>
                <button onClick={aumentarContador}>sumar</button>
                <button onClick={restarContador}>restar</button>
                <button onClick={confirmar}>confirmar</button>
        </>
    );

}

export default ItemCount;