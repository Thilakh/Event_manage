import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./FeedBack.css";

const Feedbackform = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!name || !email || !feedback) {
      setError('All fields are required');
      return;
    }
    setError('');
    setSubmitted(true);
    console.log({ name, email, feedback });
  };

  return (
    <div className="feedback-container">
      <h2 className="feedback-title">Feedback Form</h2>
      {submitted ? (
        <p className="success-message">Thank you for your feedback!</p>
      ) : (
        <form className="feedback-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-input"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-input"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <textarea
              className="form-input"
              placeholder="Your Feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="form-button">
            <Link to="/">Submit</Link>
            </button>
        </form>
      )}
    </div>
  );
};

export default Feedbackform;
