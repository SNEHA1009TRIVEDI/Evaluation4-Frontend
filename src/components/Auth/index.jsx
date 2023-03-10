//create a component for user login and password
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";
const Auth = () => {
  const navigate = useNavigate();

  const [userEmail, setuserEmail] = useState("");
  const [password, setPassword] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const SignUp = async (name, password) => {
    const response = await fetch("http://localhost:3000/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: name,
        password: password,
      }),
    });
    const data = await response.json();
    // console.log(data);
  };

  const userSignUpHandler = (e) => {
    setuserEmail(e.target.value);
    setSubmitted(false);
  };
  const handleUserPassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  const routeChangeHandler = () => {
    const path = "/login";
    navigate(path);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    if (userEmail === "" || password === "") {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
      SignUp(userEmail, password);
      // navigate to dashboard

      alert(
        "Registration Successful please click okay to login to the account"
      );
      routeChangeHandler();
    }
  };

  return (
    <div className="body">
      <div className="left_side_body">
        <div className="heading">
          <h1>
            <b>
              Design APIs fast, <br className="br"/> Manage content easily.
            </b>
          </h1>
        </div>
      </div>
      <div className="right_side_body">
        <div className="login_form_body">
          <div className="login_form">
            <div className="right_side_body_content">
            <h2>Register to your CMS+ account</h2>
            <div className="inpur_form_body">
              <div className="email">
                <p>Email</p>
                <input className="input" type="text" name="email" onChange={userSignUpHandler} />
              </div>
              <div className="password">
                <p>Password</p>
                <input
                  className="input"
                  type="password"
                  name="password"
                  onChange={handleUserPassword}
                />
              </div>
              <div className="buttons">
                <button className="button_color" type="submit" onClick={handleSignUp}>
                  Sign Up
                </button>
                <button className="button_color" type="submit" onClick={routeChangeHandler}>
                  Sign In
                </button>
              </div>

            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
