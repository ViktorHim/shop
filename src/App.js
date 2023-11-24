import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import HomePage from './pages/Home';
import ShoppingCart from './pages/ShoppingCart'

import { Route, Routes, BrowserRouter } from "react-router-dom";

import './App.scss';

function App() {

  return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shopping_cart" element={<ShoppingCart />} />
          </Routes>
        </BrowserRouter>
      );
}

      export default App;
