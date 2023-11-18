import CategoryButton from "../CategoryButton/CategoryButton";
import cart from "../../icons/header/cart.svg";

import "./Categories.css"
import "../../App.css"

function Categories() {
    return (
        <div className="container">
            <div className="categories__grid">
                <CategoryButton column="span 2" row="span 1" content={{ iconLink: {cart}, text: "Кроссовки" }} />
                <CategoryButton column="span 1" row="span 1" content={{ iconLink: {cart}, text: "Кроссовки" }} />
                <CategoryButton column="span 1" row="span 2" content={{ iconLink: {cart}, text: "Кроссовки" }} />
                <CategoryButton column="span 1" row="span 1" content={{ iconLink: {cart}, text: "Кроссовки" }} />
                <CategoryButton column="span 2" row="span 1" content={{ iconLink: {cart}, text: "Кроссовки" }} />
                <CategoryButton column="span 1" row="span 1" content={{ iconLink: {cart}, text: "Кроссовки" }} />
                <CategoryButton column="span 1" row="span 1" content={{ iconLink: {cart}, text: "Кроссовки" }} />
                <CategoryButton column="span 2" row="span 1" content={{ iconLink: {cart}, text: "Кроссовки" }} />
            </div>
        </div>
    );
}

export default Categories;