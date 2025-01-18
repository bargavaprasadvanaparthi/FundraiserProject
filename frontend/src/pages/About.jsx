import React from 'react';
import "../Styling/About.css";

const About = () => {
  return (
    <div id="about-page">
      <div className="about-container">
        <h1 className="about-title">About CharityFund</h1>
        <p className="about-intro">
          Welcome to <strong>CharityFund</strong>, where we believe in making a difference, one step at a time. Our mission is to create a positive impact on the lives of those in need through collective efforts and unwavering dedication.
        </p>
        <div className="about-section">
          <h2 className="section-title">Our Mission</h2>
          <p className="section-text">
            We aim to empower underprivileged communities by providing them with the resources they need to thrive. From education and healthcare to emergency aid and sustainability projects, we are committed to creating a better world for all.
          </p>
        </div>
        <div className="about-section">
          <h2 className="section-title">What We’ve Achieved</h2>
          <ul className="achievement-list">
            <li>✅ Raised over $1M for disaster relief efforts worldwide.</li>
            <li>✅ Provided clean water access to 100+ remote villages.</li>
            <li>✅ Sponsored education for 5,000+ children in underdeveloped regions.</li>
            <li>✅ Distributed over 50,000 meals to homeless families last year.</li>
          </ul>
        </div>
        <div className="about-section">
          <h2 className="section-title">Why Choose Us?</h2>
          <p className="section-text">
            We prioritize transparency, accountability, and efficiency. Every dollar you donate is used to maximize its impact, ensuring that the help reaches where it’s needed the most.
          </p>
        </div>
        <div className="about-section">
          <h2 className="section-title">Join Our Cause</h2>
          <p className="section-text">
            Together, we can make the world a better place. Partner with us, volunteer, or donate to help us continue our mission of spreading hope and kindness.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
