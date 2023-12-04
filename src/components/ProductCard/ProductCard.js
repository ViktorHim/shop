import './ProductCard.scss'
import cart from '../../assets/icons/product/add.svg'

import { Link } from 'react-router-dom';

const ProductCard = () => {
  return (
    <Link to="/product_page">
      <li className="product-card">
        <img src="" alt="product" className="product-card__img" />
        <button className='add-button'>
          <img src={cart} alt="add-to-cart" className="product-card__icon" />
        </button>
        <div className="product-card__description">
          <p className="description">Lorem ipsum dolor sit amet.</p>
        </div>
      </li>
    </Link>
  )
}

export default ProductCard