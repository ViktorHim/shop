import CategoryButton from "../CategoryButton/CategoryButton"

import "./Categories.css"
import "../../App.css"

function Categories() {
    return (
        <div className="container">
            <div className="categories">
                <CategoryButton h={"300px"} w={"20px"} />
            </div>
        </div>
    );
}

export default Categories;