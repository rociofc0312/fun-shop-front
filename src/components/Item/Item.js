import { Link } from 'react-router-dom';
import './styles.css'

const Item = ({ item }) => {
    return (
        <div className="item">
            <div className="item-content">
                <div className="item-image">
                    <img src={item.url} alt="item" />
                </div>
                <div className="item-description">
                    <h4>{item.name}</h4>
                    <small>{item.description}</small>
                    <p>S/ {item.price.toFixed(2)}</p>
                    <Link to={`/item/${item.id}`} className="detail-btn">Ver detalle</Link>
                </div>
            </div>
        </div>
    )
}

export default Item;