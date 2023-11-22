import Header from '../Header/Header';
import Categories from "../Categories/Categories"
import Slider from '../Slider/Slider';
import Footer from '../Footer/Footer';
import './App.scss';

function App() {

  let imageUrls = [];
  for(let i=1; i <= 15;i++) {
    imageUrls.push(i);
  }

  return (
    <div className="App">
      <Header/>
      <Categories/>
      <Slider urls={imageUrls} slidesOnScreen={4}/>
      <Footer></Footer>
    </div>
  );
}

export default App;
