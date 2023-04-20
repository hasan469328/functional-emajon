import React, { useContext, useState } from "react";
import "./signup.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";



const SignUp = () => {
  const {createNewUser} = useContext(AuthContext);
  const [error, setError] = useState(null);

  const handleSignup = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
   

    setError('');

    if(password !== confirm){
      setError('password did not match');
      return;
    }
    else if(password.length < 6){
      setError('password must be at least 6 characters long')
    }
    createNewUser(email, password)
    .then(result => {
      const loggedUser = result.user;
      console.log(loggedUser);
      form.reset()
    })
    .catch(error => {
      setError(error.message)
    })
  }

  return (
    <div className="form-div">
      <form onSubmit={handleSignup} className="form-container">
        <p className="form-title">Sign up</p>
        <div className="form-control">
          <label htmlFor="">Email</label>
          <input type="email" name="email" id="email" required />
        </div>
        <div className="form-control">
          <label htmlFor="">Password</label>
          <input type="password" name="password" id="password" required />
        </div>
        <div className="form-control">
          <label htmlFor="">Confirm Password</label>
          <input type="password" name="confirm" id="confirm" required />
        </div>
        <p className="sub-title-color">{error}</p>
        <div className="form-control">
          <input className="btn-submit" type="submit" value="Sign up" />
        </div>
        <p className="sub-title">
          <small>
            Already have an account?{" "}
            <Link className="link" to="/login">
              Login
            </Link>
          </small>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
