import './CartItem.scss'
import trash from  '../../assets/icons/cart/trash.svg'
import { useState } from 'react'

const CartItem = () => {
    const [count, setCount] = useState(1);

    const handleCounter = (addCount) => {
        if (count + addCount > 0 && count + addCount <= 100) {
            setCount((count) => count + addCount);
        }
    }

    const onCountChange = (e) => {
        setCount(() => +e.target.value);
    }

  return (
    <div className='product'>
        <div className="left">
            <img src="" alt="img" className="product__img" />
            <div className="product__description">
                <h2 className="product__title">Название товара</h2>
                <div className="color-wrapper">
                    <p>Цвет:</p>
                    <div className="color"
                    //цвет приходит в виде hex-кода
                    style={{backgroundColor:'pink'}}/> 
                </div>
                <div className="size-wrapper">
                    <p>Размер:</p>
                    <div className="size">L</div>
                </div>
                <p className="price">19 999 руб</p>
            </div>
        </div>
        <div className="right">
            <div className="counter">
                <button
                onClick={() => handleCounter(-1)}>-</button>
                <input
                value={count}
                onChange={onCountChange}
                min={1}
                max={100}
                type='number'
                className="counter__field"
                />
                <button
                onClick={() => handleCounter(1)}>+</button>
            </div>
            <button className="clear-product">
                <img src={trash} alt="trash" className="clear-product__img" />
            </button>
        </div>
    </div>
  )
}

export default CartItem