import React, { Component } from 'react';
import PropTypes from "prop-types";

const Login = (props) => (
   <nav className = "login">
      <h2>Board Game Coach Login</h2>
      <p>Sign into your account</p>
      <button
         className = 'facebook'
         onClick={() => props.authenticate('Facebook')}
      >
         Login with Facebook
      </button>
   </nav>
);

Login.propTypes = {
   authenticate: PropTypes.func.isRequired
};

export default Login;