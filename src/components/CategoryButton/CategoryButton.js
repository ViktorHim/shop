import "./CategoryButton.scss"

function CategoryButton({row, column, content}) {
    return (
        <div 
        className="category__button"
        style={{
            gridColumn: column,
            gridRow: row
        }}>
            <img src={content.iconLink}></img>
            <p>{content.text}</p>
        </div>
    );
}

export default CategoryButton;