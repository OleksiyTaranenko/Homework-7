import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Context from './context';
import './App.css';
import Menu from './components/Menu';
import About from './views/About';
import Main from './views/Main';
import Error from './views/Error';
import Products from './views/Products';
import ProductsDetails from './views/ProductsDetails';
import Basket from './views/Basket';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0);
  return (
    <Context.Provider value={{ count, setCount }}>
      <div className="App">
        <Router>
          <Menu />
          <Routes>
            <Route path='/' exact="true" element={<Main />} />
            <Route path='/about' element={<About />} />
            <Route path='/products' exact="true" element={<Products />} />
            <Route path='/products/:productId' element={<ProductsDetails />} />
            <Route path='/basket' element={<Basket />} />
            <Route path='*' element={<Error />} />
          </Routes>
          <Footer/>
        </Router>
      </div>
    </Context.Provider>
  );
}

export default App;