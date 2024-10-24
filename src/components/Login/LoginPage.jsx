import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./LoginPage.css"

const Loginpage = () => {
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    navigate("/");
  };

  return (
    <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Username"
                   
                />
                <input
                    type="password"
                    placeholder="Password"
                    
                />
                <button type="submit">Login</button>
            </form>
        </div>
  )
}

export default Loginpage;
