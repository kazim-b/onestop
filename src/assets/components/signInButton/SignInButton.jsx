import React, { useState } from 'react'
import './signInButton.css'
import { Link } from "react-router-dom";

const SignInButton = (props) => {
  const [isSigninActive, setIsSigninActive] = useState(false);

  const activateSignin = () => {
    setIsSigninActive(true);
    document.body.classList.add("noScroll");
  };

  const deactivateSignin = () => {
    setIsSigninActive(false);
    document.body.classList.remove("noScroll");
  };
  return (
    <>
      <Link className={`signin ${props.btnColor}`} onClick={() => activateSignin()}>{props.text}</Link>

      <div className={`popupSection ${isSigninActive ? "active" : ""}`}>
        <div className="popup">
          <div className="signInPopup">
            <div className="topDiv">
            <div className="heading">
              <h2>Welcome Back!</h2>
              <p>Sign in to your account</p>
            </div>
            <img src="/crossBlue.png" alt=""  onClick={() => deactivateSignin()} />
            </div>

            <div className="buttons">
              <button><img src="/google.png" alt="" />Continue with Google</button>
              <button><img src="/facebook.png" alt="" />Continue with Facebook</button>
            </div>

            <div className="or">
              <div></div>
              OR
              <div></div>
            </div>

            <form action="">
              <input type="email" name="" id="userEmail" placeholder='Email' />
              <input type="password" name="" id="userPassword" placeholder='Password' />
              <div className="btn">
                <input type="submit" value="SIGN IN" className='signin' />
                <Link to='/' className="forgot">Forgot Password</Link>
              </div>
              <p>Don't have an account? <Link  onClick={() => deactivateSignin()}>Sign Up</Link></p>
            </form>
          </div>
          <div className="cross" onClick={() => deactivateSignin()}>
            <img src="/cross.png" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default SignInButton
