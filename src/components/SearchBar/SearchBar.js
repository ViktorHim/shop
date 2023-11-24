import './SearchBar.scss'
import search from '../../assets/icons/header/search.svg'

const SearchBar = ({placeholder}) => {
    return (
        <div className="search-bar" action="#">
            <form className="search-bar__form">
                <input className="search-bar__input" type="text" placeholder={placeholder} name="search"/>
                <button className="search-bar__btn"><img src={search} alt="search"/></button>
            </form>
        </div>
    )
}

export default SearchBar;