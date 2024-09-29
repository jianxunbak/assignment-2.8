import { Link, Outlet, useParams } from "react-router-dom";

const Header = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Shopping Cart</h1>
      <nav style={{ display: "flex", gap: 10 }}>
        <Link to="/view">View Product Details</Link>
        <Link to="/add">Add Product</Link>
        <Link to="/about-us">About Us</Link>
        {/* If using <a> tag, it reloads the entire page and all states are reset. Cause browser request the entire page from the server */}
        {/* dont use <a> for internal links. only use <a> for external link */}
        {/* online <Link> is manage by React */}
        {/* <a href="/view">View 2</a> */}
        {id && <span>seleted id: {id} </span>}{" "}
      </nav>
      {/* Outlet is to render the children routes inside the parent route */}
      <Outlet />
    </div>
  );
};

export default Header;
