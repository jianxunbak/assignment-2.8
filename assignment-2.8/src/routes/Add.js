import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { v4 as uuid } from "uuid";

function Add({ setList }) {
  // ---------- STATES ---------- //
  const location = useLocation();
  const navigate = useNavigate();

  const isEditing = location.state && location.state.product;

  const [addNewItem, setAddNewItem] = useState({
    name: "",
    quantity: "",
    price: "",
    discount: "",
  });

  useEffect(() => {
    if (isEditing) {
      setAddNewItem(location.state.product);
    } else {
      setAddNewItem({
        name: "",
        quantity: "",
        price: "",
        discount: "",
      });
    }
  }, [isEditing, location.state]);

  // ---------- HANDLERS ---------- //
  const handleInput = (e) => {
    const { name, value } = e.target;

    setAddNewItem((prevItem) => ({ ...prevItem, [name]: value }));
  };

  const handleAddProduct = (e) => {
    e.preventDefault();

    if (isEditing === true) {
      setList((prevItem) =>
        prevItem.map((item) => (item.id === addNewItem.id ? addNewItem : item))
      );
      alert(
        `Product edited: Name: ${addNewItem.name}, quantity: ${addNewItem.quantity}, price: ${addNewItem.price}, discount: ${addNewItem.discount}`
      );
    } else {
      const newProduct = { id: uuid(), ...addNewItem };
      setList((prevItem) => [...prevItem, newProduct]);
      alert(
        `New product added: Name: ${addNewItem.name}, quantity: ${addNewItem.quantity}, price: ${addNewItem.price}, discount: ${addNewItem.discount}`
      );
    }

    navigate("/view");
  };

  // ---------- JSX ---------- //
  return (
    <>
      {isEditing ? <h2>Edit</h2> : <h2>Add</h2>}
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        name="name"
        value={addNewItem.name || ""}
        onChange={handleInput}
      />
      <br />
      <label htmlFor="quantity">Quantity:</label>
      <input
        type="number"
        name="quantity"
        value={addNewItem.quantity}
        onChange={handleInput}
      />
      <br />
      <label htmlFor="price">Price:</label>
      <input
        type="number"
        name="price"
        value={addNewItem.price}
        onChange={handleInput}
      />
      <br />
      <label htmlFor="discount">Discount:</label>
      <input
        type="number"
        name="discount"
        value={addNewItem.discount}
        onChange={handleInput}
      />
      <br />
      <button onClick={handleAddProduct}>{isEditing ? "Save" : "Add"}</button>
    </>
  );
}
export default Add;
