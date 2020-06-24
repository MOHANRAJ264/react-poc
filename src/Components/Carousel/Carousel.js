import React,{useState} from 'react'
import {Carousel} from 'react-bootstrap'
import c1 from '../../assets/c1.jpg'
import c2 from '../../assets/c2.jpg'
import c3 from '../../assets/c3.jpg'

const ControlledCarousel=()=> {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect} style={{height:"50%"}} >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={c2}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={c3}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={c1}
            alt="Third slide"
          />
  
        </Carousel.Item>
      </Carousel>
    );
  }
  
  export default ControlledCarousel