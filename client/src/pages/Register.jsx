// src/pages/Register.jsx
import React from 'react';

const Register = () => {
  return (
    <div>
      <h2>Register Page</h2>
      <form>
        <input type="text" placeholder="Name" /><br />
        <input type="email" placeholder="Email" /><br />
        <input type="password" placeholder="Password" /><br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
