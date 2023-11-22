import './Popular.scss'
import ProductCard from '../ProductCard/ProductCard'

const Popular = () => {
  return (
    <div className="container">
        <div className="popular">
            <h2 className="popular__title">Популярное</h2>
            <ul className="popular__list">
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
            </ul>
        </div>
    </div>
  )
}

export default Popular