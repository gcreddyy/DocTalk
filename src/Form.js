import React, { useState } from "react";
import "./Form.css";
import FormSignup from "./FormSignup";
import FormSuccess from "./FormSuccess";
import FormSignin from "./FormSignin";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSignin, setIsSignin] = useState(false);

  function handleSignIn(e) {
    e.preventDefault();
    setIsSignin(!isSignin);
  }

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <React.Fragment>
      <div className="app-title-wrapper">
        <h1 className="app-title">DocTalk!</h1>
      </div>
      <div className="form-container">
        {!isSubmitted ? (
          isSignin ? (
            <FormSignin />
          ) : (
            <FormSignup submitForm={submitForm} signIn={handleSignIn} />
          )
        ) : (
          <FormSuccess />
        )}
      </div>
    </React.Fragment>
  );
};

export default Form;
