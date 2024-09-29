import { NavLink, Outlet } from "react-router-dom";
import styles from "./View.module.css";

function View({ list = [] }) {
  return (
    <div className={styles.container}>
      <div className={styles.sideBar}>
        <h2>View</h2>
        <nav className={styles.nav}>
          {list.map((item) => (
            <NavLink
              key={item.id}
              to={`/view/${item.id}`}
              className={({ isActive }) =>
                isActive ? styles.linkActive : styles.link
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>
      <Outlet />
    </div>
  );
}

export default View;
