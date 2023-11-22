import CategoryButton from "../CategoryButton/CategoryButton";
import cart from "../../icons/header/cart.svg";

import "./Categories.scss"

const Categories = () => {

    const buttons = [
        <CategoryButton column="span 3" row="span 1" content={{ iconLink: { cart }, text: "Кроссовки" }} />,
        <CategoryButton column="span 1" row="span 1" content={{ iconLink: { cart }, text: "Свитшоты" }} />,
        <CategoryButton column="span 1" row="span 2" content={{ iconLink: { cart }, text: "Штаны" }} />,
        <CategoryButton column="span 1" row="span 1" content={{ iconLink: { cart }, text: "Носки" }} />,
        <CategoryButton column="span 3" row="span 1" content={{ iconLink: { cart }, text: "Верхняя одежда" }} />,
        <CategoryButton column="span 2" row="span 1" content={{ iconLink: { cart }, text: "Мефедрон" }} />,
        <CategoryButton column="span 1" row="span 1" content={{ iconLink: { cart }, text: "Кокаин" }} />,
        <CategoryButton column="span 2" row="span 1" content={{ iconLink: { cart }, text: "Поставки в ирак" }} />
    ];

    return (
        <div className="container">
            <div className="categories__section">
                {buttons};
            </div>
        </div>
    );
}

export default Categories;