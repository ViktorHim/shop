import CategoryButton from "../CategoryButton/CategoryButton"

import "./Categories.css"
import "../../App.css"

function Categories() {
    return (
        <div className="container">
            <div className="categories">
                <CategoryButton h="211px" w="633px" />
                <CategoryButton h="211px" w="316px" />
            </div>
        </div>
    );
}

export default Categories;