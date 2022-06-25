import { useParams, useNavigate, useLocation } from 'react-router-dom';
import styles from './Item.module.css';
import { getProduct, deleteProduct } from '../data';

function Item() {
  let { id } = useParams();
  let product = getProduct(id);
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <h3>Product ID: {id}</h3>
      <p>Name: {product.name}</p>
      <p>Quantity: {product.quantity}</p>
      <p>Price: {product.price}</p>
      <p>Discount: {product.discount}</p>
      <button
        onClick={() => {
          deleteProduct(id);
          navigate('/view');
        }}
      >
        Delete
      </button>
    </div>
  )
}

export default Item;
