import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./LoginPage.css"
import {Link} from 'react-router-dom'

const Signuppage = () => {
  const navigate = useNavigate();

  const handleSignup = (event) => {
    event.preventDefault();
    navigate("/");
  };

  return (
    <div className="signup-container">
            <h2>Signup</h2>
            
            <form onSubmit={handleSignup}>
                <input
                    type="text"
                    placeholder="Username"
                    
                />
                <input
                    type="password"
                    placeholder="Password"
                   
                />
                <input
                    type="text"
                    placeholder="Phone Number"
                   
                />
                <input
                    type="email"
                    placeholder="Email"
                    
                />
                <button type="submit">Sign Up</button>
                
            </form>
        </div>
  )
}

export default Signuppage;
