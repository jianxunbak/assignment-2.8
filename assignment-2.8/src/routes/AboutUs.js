import { Link, Outlet } from "react-router-dom";

const AboutUs = () => {
  return (
    <div>
      <h1>About Us</h1>
      <p>We are a great place to shop!</p>
      <ul>
        <li>
          <Link to="contact">Contact Us</Link>
        </li>
        <li>
          <Link to="career">Career</Link>
        </li>
        <li>
          <Link to="investors">Investors</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default AboutUs;
