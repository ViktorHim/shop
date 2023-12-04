import "./ProductInfoSection.scss"

const ProductInfoSection = (props) => {

    const price = "13 900 руб.";

    return (
        <div className="container">
            <div className="product__info">
                <img src="" alt="product-img" className="product__info__img" />
                <div className="product__info__title">
                    <h2>AirMax Turbo Huirbo Pro 3 S AllInclusive</h2>
                </div>
                <div className="product__info__price">
                    {price}
                </div>
                <div className="product__info__colors">
                    <p>Цвет</p>
                </div>
                <div className="product__info__sizes">
                    <p>Размер</p>
                </div>
                <button className="product__info__add-to-cart-button">
                    <p>ДОБАВИТЬ В КОРЗИНУ</p>
                </button>
                <button className="product__info__order-button">
                    <p>ЗАКАЗАТЬ</p>
                </button>
            </div>
        </div>
    )
}

export default ProductInfoSection