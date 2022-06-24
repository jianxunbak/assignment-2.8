import { useContext } from 'react';
import { useParams } from 'react-router-dom';

import ListContext from '../context/ListContext';

function ViewForm() {
  const listCtx = useContext(ListContext);
  const { productId } = useParams();
  // console.log('ViewForm->productId', productId);
  console.log('ViewForm->listCtx', listCtx);
  return (
    <div>
      <h2>Product Details</h2>
      {/* <div className={styles.form}>
        <Input value={ctx.name} label="Product Name" onChange={ctx.handlerChangeName} />
        <Input value={ctx.price} label="Price" onChange={ctx.handlerChangePrice} />
      </div> */}
    </div>

  )
}

export default ViewForm