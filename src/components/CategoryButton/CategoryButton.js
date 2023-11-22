import "./CategoryButton.scss"

function CategoryButton(props) {
    return (
        <div
        className="category__button"
        style={{
            gridColumn: props.column,
            gridRow: props.row
        }}>
            <img src={props.content.iconLink}></img>
            <p>{props.content.text}</p>
        </div>
    );
}

export default CategoryButton;