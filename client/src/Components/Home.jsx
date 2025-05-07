import React from 'react';
import Carousel from './Carousel';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import collegeImage from './Assets/logo.png';
import Accordion from 'react-bootstrap/Accordion';

const Home = () => {
  return (
    <>
      <Carousel />

      <div className="rgukt-info">
        <div className="info-image">
          <img src={collegeImage} alt="RGUKT-ONG College" />
        </div>
        <div className="info-content">
          <h2>ABOUT RGUKT-ONGOLE</h2>
          <p>
            RGUKT-ONG (Rajiv Gandhi University of Knowledge Technologies - Ongole) is renowned for its commitment to providing quality education in technology and sciences. Situated in a serene environment, the campus fosters innovation and academic excellence.
          </p>
          <p>
            Facilities include state-of-the-art laboratories, modern classrooms, and extensive library resources. The college hosts various cultural and technical events throughout the year, enriching student life and promoting holistic development.
          </p>
          <p>
            Achievements: RGUKT-ONG has produced outstanding graduates who have excelled in various fields, contributing significantly to society and industry.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="social-icons">
          <a href="https://rgukt.in/"><i class="fa fa-globe" aria-hidden="true"></i></a>
          <a href="https://www.facebook.com/profile.php?id=301466520229829&_rdr"><i className="fab fa-facebook"></i></a>
          <a href="https://x.com/iiitongole/status/1807938167259254954"><i className="fab fa-twitter"></i></a>
          <a href="https://www.instagram.com/beautyofrgukt/?hl=en"><i className="fab fa-instagram"></i></a>
          <a href="https://www.youtube.com/@Rgukt-Ongole?app=desktop"><i className="fab fa-youtube"></i></a>
        </div>
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} RGUKT-ONG. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default Home;