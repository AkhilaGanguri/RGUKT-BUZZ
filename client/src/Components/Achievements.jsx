// Achievements.js

import React from 'react';
import './Achievements.css'; // Import your CSS file where you define styles
import kabaddiImage from './Assets/kabaddii.jpeg'; // Example image import
import volleyballImage from './Assets/volley.jpeg'; // Example image import
import basketballImage from './Assets/vol.jpg'; // Example image import
import play from './Assets/naik.jpeg';
import k from './Assets/K.jpeg';
import kabbadi from './Assets/kab.jpeg';

const Achievements = () => {
  const achievementsData = [
    {
      game: 'Kabaddi',
      tournament: 'OKL',
      place: 'SSN Ground',
      image: kabaddiImage
    },
    {
      game: 'Volleyball',
      tournament: 'OVL',
      place: 'Ongole',
      image: volleyballImage
    },
    {
      game: 'Basketball',
      tournament: 'OBL',
      place: 'Ongole',
      image: basketballImage
    },
    {
      game: 'Volleyball',
      tournament: 'OVL',
      place: 'Ongole',
      image: k
    },
    {
      game: 'Kabaddi',
      tournament: 'OKL',
      place: 'SSN Ground',
      image: kabbadi
    },
    {
      game: 'Basketball',
      tournament: 'OBL',
      place: 'Ongole',
      image: play
    }
    // Add more achievements as needed
  ];

  return (
    <>
    
    <div className="container">
      <h1>Achievements</h1>
      <div className="achievements-grid">
        {achievementsData.map((achievement, index) => (
          <div key={index} className="achievement">
            <img src={achievement.image} alt={achievement.game} />
            <div className="overlay">
              <p>GAME : {achievement.game}</p>
              <p>TOURNAMENT : {achievement.tournament}</p>
              <p>PLACE : {achievement.place}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Achievements;
