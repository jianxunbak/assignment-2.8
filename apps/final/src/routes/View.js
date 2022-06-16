import styles from './View.module.css';

import { useContext } from 'react';
import { Outlet } from 'react-router-dom';

import ListContext from '../context/ListContext';
import CustomLink from './CustomLink';

function View() {
  const listCtx = useContext(ListContext);

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
      <Outlet />
    </div>
  );
}

export default View;
