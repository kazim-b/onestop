import React from 'react';
import "./sign.css";
import SignInButton from "../signInButton/SignInButton";

const Sign = () => {
  return (
    <>
      <div className="sign">
        <p>Sign up for 10 daily free downloads and access to unlimited tools</p>
        <SignInButton text="SIGN IN NOW" btnColor="blue" />
      </div>
    </>
  )
}

export default Sign
