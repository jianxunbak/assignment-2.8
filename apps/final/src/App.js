import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './routes/Header';
import AddProduct from './routes/AddProduct';
import View from './routes/View';
import ViewForm from './routes/ViewForm';

import { ProductProvider } from './context/ProductContext';
import { ListProvider } from './context/ListContext'

function App() {
  const BlankPage = () => {
    return (
      <main>
        <p>Nothing to see here!</p>
      </main>
    )
  }
  const IndexPage = () => {
    return (
      <main>
        <p>Select a Product</p>
      </main> 
    )
  }
  
  return (
    <div className='App'>
      <ListProvider>
        <ProductProvider>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Header />}>
                <Route path='add' element={<AddProduct />} />
                <Route path='view' element={<View />}>
                  <Route index element={<IndexPage />} />
                  <Route path=':productid' element={<ViewForm />} />
                </Route>
                <Route path='*' element={BlankPage} />
              </Route>
            </Routes>
          </BrowserRouter>
        </ProductProvider>
      </ListProvider>
    </div>
  );
}

export default App;
