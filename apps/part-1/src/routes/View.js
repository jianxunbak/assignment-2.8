import styles from './View.module.css';
import { NavLink } from 'react-router-dom';
import { getProductList } from '../data';

function View() {
  let list = getProductList();
  return (
    <div className={styles.container}>
      <div className={styles.sideBar}>
        <h2>View</h2>
        <nav className={styles.nav}>
          {list.map((item) => (
            <NavLink 
              className={ styles.link }
              to={`/view/${item.id}`}
              key={item.id}
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default View;
