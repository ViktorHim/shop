import './ProductCard.scss'
import cart from '../../assets/icons/product/add.svg'

const ProductCard = () => {
  return (
    <li className="product-card">
        <img src="" alt="product" className="product-card__img"/>
        <button className='add-button'>
            <img src={cart} alt="add-to-cart" className="product-card__icon" /> 
        </button>
        <div className="product-card__description">
            <p className="description">Lorem ipsum dolor sit amet.</p>
        </div>
    </li>
  )
}

export default ProductCard