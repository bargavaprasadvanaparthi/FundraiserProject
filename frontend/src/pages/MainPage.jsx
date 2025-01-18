import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import '../Styling/MainPage.css';
import Header from '../Components/Header';  // Import Header component

const MainPage = () => {
  const donationCards = [
    {
      title: 'Education Fund',
      description: 'Help provide education to children in underprivileged areas.',
      amountNeeded: 5000,
      amountRaised: 1500,
    },
    {
      title: 'Healthcare Fund',
      description: 'Donate to provide medical supplies to those in need.',
      amountNeeded: 8000,
      amountRaised: 3200,
    },
    {
      title: 'Emergency Relief Fund',
      description: 'Support disaster-stricken regions with immediate relief supplies.',
      amountNeeded: 10000,
      amountRaised: 4200,
    },
    {
      title: 'Food Security Fund',
      description: 'Provide food and nutrition to families struggling with hunger.',
      amountNeeded: 6000,
      amountRaised: 2200,
    },
    {
      title: 'Water Fund',
      description: 'Help provide clean drinking water to rural areas.',
      amountNeeded: 4000,
      amountRaised: 2500,
    },
    {
      title: 'Animal Shelter Fund',
      description: 'Support our efforts to rescue and care for animals in need.',
      amountNeeded: 3000,
      amountRaised: 1800,
    },
    {
      title: 'Homeless Support Fund',
      description: 'Contribute to providing shelter and food for the homeless.',
      amountNeeded: 7000,
      amountRaised: 3500,
    },
    {
      title: 'Mental Health Fund',
      description: 'Donate to support mental health programs and initiatives.',
      amountNeeded: 6000,
      amountRaised: 2500,
    },
    {
      title: 'Clean Energy Fund',
      description: 'Help fund the transition to renewable energy sources.',
      amountNeeded: 12000,
      amountRaised: 4800,
    },
  ];

  return (
   
    
    <div className="mainpage-container">
       
      {/* <div className="hero-section">
        <h1 className="hero-title">Join Us in Changing Lives</h1>
        <p className="hero-description">
          Your contribution can make a real difference in someone's life. Explore our donation funds below!
        </p>
      </div> */}

      <div className="donation-cards-container">
        {donationCards.map((card, index) => (
          <div key={index} className="donation-card">
            <h2 className="card-title">{card.title}</h2>
            <p className="card-description">{card.description}</p>
            <div className="progress">
              <div 
                className="progress-bar" 
                style={{ width: `${(card.amountRaised / card.amountNeeded) * 100}%` }}
              ></div>
            </div>
            <p className="raised-amount">
              <strong>Amount Raised: ${card.amountRaised}</strong> of ${card.amountNeeded}
            </p>
            {/* Link component for navigation to Donate page */}
            <Link to="/app/donate" className="donate-button">Donate Now</Link>
          </div>
        ))}
      </div>
    </div>

  );
};

export default MainPage;
