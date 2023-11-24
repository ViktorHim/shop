import './Header.scss'
import cart from '../../icons/header/cart.svg'
import profile from '../../icons/header/profile.svg'
import logo from '../../icons/header/logo.svg'
import Modal from '../Modal/Modal'

import SearchBar from '../SearchBar/SearchBar';
import {Link } from 'react-router-dom';
import React, { useState } from 'react'

const Header = () => {
    const [showModal, setShowModal] = useState(false);

    const switchModal = () => {
        setShowModal(showModal => !showModal);
    }

    return(
    <header className="header">
        <div className="container">
            <nav className='navigation'>
                <Link to="/"><img src={logo} alt="logo"/></Link>
                <SearchBar placeholder="Что будем искать?"/>
                <ul className="actions">
                    <li><Link to="/shopping_cart" className="action__item"><img src={cart} alt ="cart"></img></Link></li>
                    <li><button className="action-login"
                    onClick={switchModal}><img src={profile} alt ="profile"></img></button></li>
                    <li><a href="#" className="action__lang">ru</a></li>
                </ul>
            </nav>
        </div>
        <Modal showModal={showModal} setShowModal={setShowModal}/>
    </header>
    );
}

export default Header;