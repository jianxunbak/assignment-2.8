import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './routes/Header';
import View from './routes/View';
import Add from './routes/Add';

function App() {
  
  const DefaultPage = () => <p>Nothing to see here!</p>;

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Header />}>
            <Route path='view' element={<View />} />
            <Route path='add' element={<Add />} />
          </Route>
          <Route path='*' element={<DefaultPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
