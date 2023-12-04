import {Route, Routes} from "react-router-dom";
import HomePage from '../../pages/HomePage';
import ShoppingCart from '../../pages/ShoppingCart'
import ProductPage from "../../pages/ProductPage";

const Main = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/shopping_cart" element={<ShoppingCart/>} />
        <Route path="/product_page" element={<ProductPage />}/>
    </Routes>
  )
}

export default Main