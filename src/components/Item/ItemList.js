import { useEffect, useState } from "react";
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




function getItems() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                {
                    pictureURL:"data:image/jpeg;base64,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" ,
                    id: 1,
                    title: "Soga" , 
                    description: "2.80 de largo, material métalico en los mangos." , 
                    price: "$999,99",
                },
                {
                    pictureURL:"data:image/jpeg;base64,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" ,
                    id: 2,
                    title: "Botella de agua" , 
                    description: "Es inodora." , 
                    price: "$1299,99",
                },
                {
                    pictureURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgarKAoFMzzGJvQ8-fRCWfZfl-RzUHa8k77g&usqp=CAU" ,
                    id: 3,
                    title: "Cayeras" , 
                    description: "Ideales para colgarse de la barra." , 
                    price: "$799,99",
                }
            ]
            );
        }, 2000);  
    });
}

export default ItemList;