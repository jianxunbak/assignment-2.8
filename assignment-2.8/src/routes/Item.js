import { useNavigate, useParams } from "react-router-dom";
import styles from "./Item.module.css";
const Item = ({ list = [], handlerDeleteProduct, handlerEditProduct }) => {
  const { id } = useParams();
  const product = list.find((item) => item.id === id);
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <h3>Product ID: {product.id} </h3>
      <ul>
        <li>Name: {product.name}</li>
        <li>quantity: {product.quantity}</li>
        <li>price: ${product.price}</li>
        <li>discount: {product.discount}</li>
      </ul>
      <button
        onClick={() => {
          handlerDeleteProduct(id);
          navigate("/view");
        }}
      >
        {" "}
        delete
      </button>
      <button
        onClick={() => {
          navigate("/Add", { state: { product } });
        }}
      >
        {" "}
        edit
      </button>
    </div>
  );
};

export default Item;
