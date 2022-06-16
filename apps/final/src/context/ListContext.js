import { createContext, useState } from 'react';

const ListContext = createContext();

export function ListProvider({ children }) {  
  const [list, setList] = useState([]);
  const context = { list, setList }
  return (
    <ListContext.Provider value={context}>
      {children}
    </ListContext.Provider>
  )
}
export default ListContext;

