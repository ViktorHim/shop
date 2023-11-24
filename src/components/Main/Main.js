import {Route, Routes} from "react-router-dom";
import HomePage from '../../pages/HomePage';
import ShoppingCart from '../../pages/ShoppingCart'

const Main = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/shopping_cart" element={<ShoppingCart/>} />
    </Routes>
  )
}

export default Main