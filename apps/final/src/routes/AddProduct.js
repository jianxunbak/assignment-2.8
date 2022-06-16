import { useContext } from 'react';
import { v4 as uuid } from 'uuid';

import styles from './AddProduct.module.css';
import Card from '../components/Card';
import ProductContext from '../context/ProductContext';
import ListContext from '../context/ListContext';
import CustomLink from './CustomLink';

function AddProduct() {
  const ctx = useContext(ProductContext);
  const listCtx = useContext(ListContext);

  /*
    CREATE: Add a new product into the list
  */
  const handlerAddProduct = () => {
    const newItem = {
      id: uuid(),
      name: ctx.name,
      quantity: ctx.count,
      price: ctx.price,
      discount: ctx.discount,
      total: (ctx.count * ctx.price * (100 - ctx.discount)) / 100,
    };
    console.log('newItem.id', newItem.id);
    const newList = [...listCtx.list, newItem];
    listCtx.setList(newList);
    console.log(newList);
  };
  return (
    <div className={styles.container}>
      <div className={styles.sideBar}>
        <h3>List</h3>
        <nav>
          {listCtx.list.map((item) => (
            <CustomLink
              className={({ isActive }) =>
                isActive ? styles.linkActive : styles.link
              }
              key={item.id}
              to={`/view/${item.id}`}
            >
              {item.name}
            </CustomLink>
          ))}
        </nav>
      </div>
      <Card handlerAddProduct={handlerAddProduct} />
    </div>
  );
}
export default AddProduct;
