// SignInPage.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useHistory } from 'react-router-dom'; // If using React Router

function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
//   const history = useHistory(); // For navigation, if using React Router

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your authentication logic
    // For simplicity, just navigate to a new page on form submit
    // history.push('/dashboard'); // Replace '/dashboard' with your actual dashboard route
    alert("login Successful")
    navigate("/movie")
  };

  return (
    <div className="signContainer">
        <div>

      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>

        <button type="submit" className="btn btn-primary submitBtn">Submit</button>
        </div>
      </form>
        </div>
    </div>
  );
}

export default SignInPage;
