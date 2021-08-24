import {useState} from "react";

const ItemCount = ({ stock , amount , onAdd }) => {

    const [contador,setContador] = useState(amount);

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
            onAdd(contador);
        }
    }

    return (
        <>
            <button onClick={aumentarContador}>+</button>
            <p>{contador}</p>
            <button onClick={restarContador}>-</button>
            <button onClick={confirmar}>Agregar al carrito</button>
        </>
    );

}

export default ItemCount;