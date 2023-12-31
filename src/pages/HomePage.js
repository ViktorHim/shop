import Categories from "../components/Categories/Categories"
import Slider from '../components/Slider/Slider';
import Popular from '../components/Popular/Popular';
import Guide from '../components/Guide/Guide';

function HomePage() {

    let imageUrls = [];
    for (let i = 1; i <= 15; i++) {
        imageUrls.push(i);
    }

    return (
        <>
            <Categories />
            <Slider urls={imageUrls} slidesOnScreen={4} />
            <Popular></Popular>
            <Guide></Guide>
        </>
    );
}

export default HomePage;