import React from "react";
import "./login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="form-div">
      <form className="form-container">
        <p className="form-title">Login</p>
        <div className="form-control">
          <label htmlFor="">Email</label>
          <input type="email" name="email" id="email" required />
        </div>
        <div className="form-control">
          <label htmlFor="">Password</label>
          <input type="password" name="password" id="password" required />
        </div>
        <div className="form-control">
          <input className="btn-submit" type="submit" value="Login" />
        </div>
        <p className="sub-title"><small>New to ema-john? <Link className="link" to='/signup'>Create New Account</Link></small></p>
      </form>
    </div>
  );
};

export default Login;
