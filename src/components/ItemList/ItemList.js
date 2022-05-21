import Item from "../Item/Item"
import './styles.css'

const ItemList = ({ items }) => (
    <div className="item-list">
        { items.map((item) => <Item key={item.id} item={item} />) }
    </div>
)

export default ItemList;