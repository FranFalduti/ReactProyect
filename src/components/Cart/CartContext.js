import { useState } from "react"

const CartContext = ({defaultValue = [], children}) => {
    const [cart, setCart] = useState([]);

    function addItem(item, quantity) {

    }

    function removeItem(itemID) {

    }

    function clear() {


    }

    function isInCart(id) {

    }

    return(    
        <CartContext.Provider value={{cart, addItem, removeItem, clear, isInCart}}>
            {children}
        </CartContext.Provider> 
    )
}