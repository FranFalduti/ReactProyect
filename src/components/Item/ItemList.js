import { useEffect, useState } from "react";
import { getItems } from "../../services/items.service";
import Item from "./Item";


const ItemList = ({}) => {
    const [arrayItems, setArrayItems] = useState([]);
    const [backupItems, setBackupItems] = useState([]);
    
    useEffect(() => {
        getItems().then((items) => {
            setBackupItems(items);
            setArrayItems(items);
        });
    }, []);

    return (
        <div>
            <div>
                <input type="text" onChange={filtrado} placeholder="Buscar..."/>
            </div>
            <div>
                {arrayItems.map((item) => {
                    return(
                        <Item 
                            pictureURL={item.pictureURL}
                            id={item.id} 
                            title={item.title}
                            description={item.description}
                            price={item.price}
                        >
                        </Item>
                    )
                })}
            </div>
        </div>
    );

    function filtrado(event) {
        let filtro = event.target.value.toUpperCase();
        let itemsFiltrados = backupItems.filter((item) => {
            return item.description.toUpperCase().includes(filtro);
        });
        setArrayItems(itemsFiltrados);
    }
}


export default ItemList;