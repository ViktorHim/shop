import './Slider.scss'
import arrow from '../../icons/slider/arrow.svg'
import Slide from './Slide/Slide'
import { useState } from 'react'

const Slider = ({urls, slidesOnScreen}) => {
  const [index, setIndex] = useState(0);


  const canMove = (dir) => {
    if (dir === 1 ) {
      return index + slidesOnScreen <= urls.length - 1;
    } else if(dir === -1) {
      return index - slidesOnScreen >= 0;
    }
    return false;
  }

  const nextSlide = () => {
    setIndex(() => canMove(1) ? index + slidesOnScreen : index);
  };

  const prevSlide = () => {
    setIndex(() => canMove(-1) ? index - slidesOnScreen : index);
  };

  return (
    <div className="container">
      <div className='slider'>
        <button onClick={prevSlide} className='arrow'>
            <img src={arrow} alt="arrow" className={`arrow__img${!canMove(-1) ? ' disable' : ''}`}/>
        </button>
        <div className="slider__field">
          <div
          style={
          {
              transform: `translateX(calc(${-index * 100 / slidesOnScreen}%))`,
              transition: `all ${0.2 * slidesOnScreen}s ease-in`
          }
            } className="slider__list">
            {
              urls.map(url => {
                return (
                  <Slide url={url} index={index} count={slidesOnScreen}/>
                )
              })
            }
          </div>
        </div>
        <button onClick={nextSlide} className='arrow'>
            <img src={arrow} alt="arrow" className={`arrow__img reverse${!canMove(1) ? ' disable' : ''}`}/>
        </button>
      </div>
    </div>
  )
}

export default Slider