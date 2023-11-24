import './Cart.scss'
import trash from  '../../assets/icons/cart/trash-all.svg'

import CartItem from '../CartItem/CartItem'

const Cart = () => {
  return (
    <div className="container">
        <div className="cart">
            <h1 className="cart__title">Корзина</h1>
            <div className="wrapper">
                <button className="clear-button">
                    <p className="clear-button__text">Очистить</p>
                    <img src={trash} alt="trash" className="clear-button__img" />
                </button>
            </div>
           <ul className="cart__items">
                <CartItem/>
                <CartItem/>
                <CartItem/>
           </ul>
        </div>
    </div>
  )
}

export default Cart