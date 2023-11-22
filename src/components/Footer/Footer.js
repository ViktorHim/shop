import './Footer.scss'

const Footer = () => {
  return (
    <div className="container">
        <footer className="footer">
            <a href="#" className='footer__link'><img src="" alt="logo" /></a>
            <ul className="footer__list">
                <li className="footer__item">
                    <p className="text">О нас</p>
                </li>
                <li className="footer__item">
                    <p className="text">Популярные товары</p>
                </li>
                <li className="footer__item">
                    <p className="text">Связаться с нами</p>
                </li>
            </ul>
        </footer>
    </div>
  )
}

export default Footer