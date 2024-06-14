import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const RegisterForm = () => {
  return (
    <div className="register-form">
        
      <h2>User Register</h2>
      <form>
        <div>
          <label htmlFor="nombre">Name:</label>
          <input type="text" id="nombre" name="nombre" required />
        </div>
        <div>
          <label htmlFor="apellido">Last Name:</label>
          <input type="text" id="apellido" name="apellido" required />
        </div>
        <div>
          <label htmlFor="email">E-mail:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="telefono">Phone:</label>
          <input type="tel" id="telefono" name="telefono" required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input type="password" id="confirmPassword" name="confirmPassword" required />
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default RegisterForm;
