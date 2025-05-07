import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Ssn from './Assets/ssn.png';
import Volley from './Assets/vol.jpg';
import Kabbaddi from './Assets/kabaddii.jpeg';

function MyCarousel() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img className="d-block w-100" src={Ssn} alt="First slide" style={{width: '100%',height: '540px'}}/>
        <Carousel.Caption>
          <h3>SSN Engineering College, RGUKT-ONG</h3>
          <p>A place where memories are made, Challenges are faced and life long bonds are Formed.It's a place of personal evolution.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Volley} alt="Second slide" style={{width: '100%',height: '540px'}} />
        <Carousel.Caption>
          <h3>VOLLEY BALL</h3>
          <p> 
Volley ball is a game where teamwork and precision meet in a dynamic and exhilarating game of strategy and skill.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Kabbaddi} alt="Third slide" style={{width: '100%',height: '540px'}}/>
        <Carousel.Caption>
          <h3>KABADDI</h3>
          <p>A fierce collision of athleticism, strategy, and raw determination, where every touch ignites the spirit of competition.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;
