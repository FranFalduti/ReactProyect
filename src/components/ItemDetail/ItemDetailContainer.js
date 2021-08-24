import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getItem } from "../../services/items.service";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = ({}) => {
    let { id } = useParams();
    let [item, setItem] = useState({});
    useEffect(() => {
        getItem(id).then((i) => {
            setItem(i);
        }).catch((err) => {
            console.error(err);
        });
    },[]);


    return (
        <div>
            <ItemDetail pictureURL={item.pictureURL} description={item.description} price={item.price} stock={item.stock} amount={0}/>
        </div>
    )
}

export default ItemDetailContainer;

