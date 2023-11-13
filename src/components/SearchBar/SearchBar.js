import './SearchBar.css'
import '../../App.css'
import search from '../../icons/header/search.svg'

const SearchBar = () => {
    return (
        <div className="search-bar" action="#">
            <form className="search-bar__form">
                <input className="search-bar__input" type="text" placeholder="Что будем искать?" name="search"/>
                <button className="search-bar__btn"><img src={search} alt="search"/></button>
            </form>
        </div>
        
    )
}

export default SearchBar;