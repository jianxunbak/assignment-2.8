import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { v4 as uuid } from "uuid";

function Add({ setList }) {
  // ---------- STATES ---------- //
  const location = useLocation();
  const navigate = useNavigate();

  // to determing if is editing mode by using the props passed from item.js
  const isEditing = location.state && location.state.product;

  const [addNewItem, setAddNewItem] = useState({
    name: "",
    quantity: "",
    price: "",
    discount: "",
  });

  // use useEffect to set the addNewItem to props passed from item.js if isEditing is true. if not true, set it as empty
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

  // used event to get the value and name dynamically and set the AddNewItem
  const handleInput = (e) => {
    const { name, value } = e.target;
    setAddNewItem((prevItem) => ({ ...prevItem, [name]: value }));
  };

  // use an if statement to check if editing is true.
  // if true, will check if the id is same as the one found inside list and update it.
  // if false, it will add product into list
  const handleAddProduct = (e) => {
    e.preventDefault();

    if (isEditing === true) {
      setList((prevItem) =>
        prevItem.map((item) => (item.id === addNewItem.id ? addNewItem : item))
      );
      //create alert to let user know whats been updated.
      alert(
        `Product edited: Name: ${addNewItem.name}, quantity: ${addNewItem.quantity}, price: ${addNewItem.price}, discount: ${addNewItem.discount}`
      );
    } else {
      const newProduct = { id: uuid(), ...addNewItem };
      setList((prevItem) => [...prevItem, newProduct]);
      //create alert to let user know whats been added.

      alert(
        `New product added: Name: ${addNewItem.name}, quantity: ${addNewItem.quantity}, price: ${addNewItem.price}, discount: ${addNewItem.discount}`
      );
    }

    navigate("/view");
  };

  // ---------- JSX ---------- //
  return (
    <>
      {/* Change from add to edit if isEditing is true */}
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
      {/* Change from add to save if isEditing is true */}
      <button onClick={handleAddProduct}>{isEditing ? "Save" : "Add"}</button>
    </>
  );
}
export default Add;
