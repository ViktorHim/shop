import './Header.css'
import '../../App.css'
import cart from '../../icons/header/cart.svg'
import profile from '../../icons/header/profile.svg'

const Header = () => {
    return(
    <header className="header">
        <div className="container">
            <nav className='navigation'>
                <a href="#"><img src="" alt="logo"/></a>
                {/* <SearchBar/> */}
                <ul className="actions">
                    <li><a href="#" className="action__item"><img src={cart} alt ="cart"></img></a></li>
                    <li><a href="#" className="action__item"><img src={profile} alt ="profile"></img></a></li>
                    <li><a href="#" className="action__lang">ru</a></li>
                </ul>
            </nav>
        </div>
    </header>
    );
}

export default Header;