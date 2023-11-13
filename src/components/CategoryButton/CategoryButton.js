import "./CategoryButton.css"

function CategoryButton(props) {
    return (
        <div style={{
            backgroundColor: "#242424",
            borderRadius: "50px",
            height: props.h,
            width: props.w,
        }}>
            <p>Кнопка</p>
        </div>
    );
}

export default CategoryButton;