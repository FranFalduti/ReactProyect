const Item = ({pictureURL, id, title, description, price}) => {

    return (
        <div className="Item">
            <ul>
                <li><img src={pictureURL}></img></li>
                <li>ID: {id}</li>
                <li>Título: {title}</li>
                <li>Descripción: {description}</li>
                <li>Precio: {price}</li>
            </ul>
        </div>
    );
}

export default Item;