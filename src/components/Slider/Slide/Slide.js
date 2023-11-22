import './Slide.scss'

const Slide = ({url, count}) => {


  return (
    <div className='slide' style={{flex: `0 0 calc(${100/count}% - 20px)`}}>
      <p style={{color:'white'}}>{url}</p>
        {/* <img src="#" alt="brand"/> */}
    </div>
  )
}

export default Slide