import './Guide.scss'
import telegram from '../../assets/icons/guide/telegram_icon.svg'
import cart from '../../assets/icons/guide/shopping_cart.svg'
import bag from '../../assets/icons/guide/shopping_bag.svg'
import search from '../../assets/icons/guide/manage_search.svg'


const Guide = () => {
  return (
    <div className="container">
        <div className="guide">
            <h2 className="guide__title">Как сделать заказ?</h2>
            <ul className="guide__list">
                <li className="guide__item">
                    <div className="guide__card">
                        <img src={search} alt="search" className="guide__img" />
                        <p className="instruction">Найдите желаемые товары на сайте</p>
                    </div>
                </li>
                <li className="guide__item">
                    <div className="guide__card">
                        <img src={cart} alt="search" className="guide__img" />
                        <p className="instruction">Добавьте в корзину</p>
                    </div>
                </li>
                <li className="guide__item">
                    <div className="guide__card">
                        <img src={telegram} alt="search" className="guide__img" />
                        <p className="instruction">Оплатите и отслеживайте заказ в Telegram</p>
                    </div>
                </li>
                <li className="guide__item">
                    <div className="guide__card">
                        <img src={bag} alt="search" className="guide__img" />
                        <p className="instruction">Получите заказ и радуйтесь</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    
  )
}

export default Guide