const Item = ({pictureURL, id, title, description, price}) => {

    return (
        <div className="Item">
            <div><img src={pictureURL}></img></div>
            <div>ID: {id}</div>
            <div>Título: {title}</div>
            <div>Descripción: {description}</div>
            <div>Precio: {price}</div>
        </div>
    );
}

export default Item;