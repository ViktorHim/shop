import './SearchBar.scss'
import search from '../../icons/header/search.svg'

const SearchBar = (props) => {
    return (
        <div className="search-bar" action="#">
            <form className="search-bar__form">
                <input className="search-bar__input" type="text" placeholder={props.placeholder} name="search"/>
                <button className="search-bar__btn"><img src={search} alt="search"/></button>
            </form>
        </div>
    )
}

export default SearchBar;