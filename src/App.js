import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import HomePage from './pages/Home';
import ShoppingCart from './pages/ShoppingCart'

import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";

import './App.scss';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" component={HomePage} />
        <Route path="/shopping_cart" component={ShoppingCart} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
