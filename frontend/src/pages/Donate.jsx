



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styling/Donate.css";

const Donate = () => {
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const [donationReason, setDonationReason] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [amountError, setAmountError] = useState(""); // State for amount error message
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_BACKEND_URL;

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleDonationReasonChange = (event) => {
    setDonationReason(event.target.value);
  };

  const handleAmountChange = (e) => {
    const value = e.target.value;
    if (value < 0) {
      setAmountError("Enter only positive value");
    } else {
      setAmountError("");
    }
    setAmount(value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // Prevent form submission if there is an amount error
    if (amountError) {
      alert("Please enter a valid amount");
      return;
    }

    // Sending form data to the backend via fetch
    try {
      const response = await fetch(`${API_URL}/donate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: fullName,
          email: email,
          amount: amount,
          paymentMethod: paymentMethod,
          donationReason: donationReason,
        }),
      });

      const data = await response.json();

      // Display success message
      alert("Thank you for donating! " + data.message);
      navigate("/app/donars");

      // Reset form fields after donation
      setFullName("");
      setEmail("");
      setAmount("");
      setPaymentMethod("credit-card");
      setDonationReason("");

    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div className="donate-page">
      <div className="donate-container">
        <h1 className="donate-title">Support Our Cause</h1>
        <form onSubmit={handleFormSubmit} className="donate-form">
          <div className="form-group">
            <label htmlFor="name" className="form-label">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-input"
              placeholder="Enter your name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="amount" className="form-label">Donation Amount</label>
            <input
              type="number"
              id="amount"
              name="amount"
              className="form-input"
              placeholder="Enter amount in USD"
              value={amount}
              onChange={handleAmountChange}
              required
            />
            {amountError && <p className="error-message">{amountError}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="payment-method" className="form-label">Payment Method</label>
            <select
              id="payment-method"
              name="payment-method"
              className="form-select"
              value={paymentMethod}
              onChange={handlePaymentMethodChange}
              required
            >
              <option value="credit-card">Credit Card</option>
              <option value="paypal">PayPal</option>
              <option value="bank-transfer">Bank Transfer</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="reason" className="form-label">Reason for Donation</label>
            <textarea
              id="reason"
              name="reason"
              className="form-input"
              placeholder="Why are you donating?"
              maxLength="250"
              value={donationReason}
              onChange={handleDonationReasonChange}
              required
            />
          </div>
          <button type="submit" className="donate-button">Donate Now</button>
        </form>
      </div>
    </div>
  );
};

export default Donate;