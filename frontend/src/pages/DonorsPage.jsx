import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import '../Styling/DonorsPage.css';  // Create styling for the donors page

const DonorsPage = () => {
  const [donors, setDonors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const API_URL = import.meta.env.VITE_BACKEND_URL;

  // Fetching donor data from the backend
  useEffect(() => {
    const fetchDonors = async () => {
      try {
        const response = await fetch(`${API_URL}/donars`); // Update with your actual API URL
        const data = await response.json();
        setDonors(data); // Set fetched data to state
        setLoading(false); // Turn off the loading indicator
        console.log(data);
      } catch (err) {
        setError('Error fetching donors data.');
        setLoading(false);
      }
    };

    fetchDonors();
  }, []);

  // Display a loading message or error if any
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="donorspage-container">
      <h1 className="page-title">Our Generous Donors</h1>

      <div className="donation-cards-container">
        {donors.map((donor, index) => (
          <div key={index} className="donation-card">
            <h2 className="donor-fullname">{donor.fullName}</h2>
            <p className="donation-amount"><strong>Amount Donated: </strong>${donor.amount}</p>
            <p className="donation-reason"><strong>Reason: </strong>{donor.donationReason}</p>
            <div className="progress">
              <div 
                className="progress-bar" 
                style={{ width: `${(donor.amount / 10000) * 100}%` }} // Adjust this if you want a static target or dynamic value
              ></div>
            </div>
            <p className="donation-details">
              <strong>Amount Raised: ${donor.amount}</strong>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonorsPage;