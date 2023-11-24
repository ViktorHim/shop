import Categories from "../components/Categories/Categories"
import Slider from '../components/Slider/Slider';
import Popular from '../components/Popular/Popular';
import Guide from '../components/Guide/Guide';
import Header from '../components/Header/Header'

import "../App.scss";

function HomePage() {

    let imageUrls = [];
    for (let i = 1; i <= 15; i++) {
        imageUrls.push(i);
    }

    return (
        <div className="App">
            <Header></Header>
            <Categories />
            <Slider urls={imageUrls} slidesOnScreen={4} />
            <Popular></Popular>
            <Guide></Guide>
        </div>
    );
}

export default HomePage;