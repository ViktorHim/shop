import "./CategoryButton.scss"

function CategoryButton({ h, w }) {
    return (
        <div style={{
            backgroundColor: "#242424",
            borderRadius: "50px",
            height: { h },
            width: { w },
        }}>
            <p>Кнопка</p>
        </div>
    );
}

export default CategoryButton;