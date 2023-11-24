import './Footer.scss'
import logo from '../../icons/header/logo.svg'
import {Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div className="container">
        <footer className="footer">
            <Link to="/" className='footer__link'><img src={logo} alt="logo" /></Link>
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