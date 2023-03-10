//create a component for user login and password
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
const Login = () => {
  const navigate = useNavigate();
  const [userEmail, setuserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const userSignInHandler = (e) => {
    setuserEmail(e.target.value);
    setSubmitted(false);
  };
  const userPasswordHandler = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };
  const LogIn = async (userEmail, password) => {
    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: userEmail,
        password: password,
      }),
    });
    const data = await response.json();
    // localStorage.setItem("token", data.token);
    console.log("Login");
    console.log(data);
    return data.token;
  };

  const verifyToken = async (token) => {
    console.log(token);
    const response = await fetch("http://localhost:3000/verify", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    const data = await response.json();
    console.log("verify");
    console.log(data.success);
    return data.success;
  };

  const handleRouteChange = (token) => {
    // const token = localStorage.getItem("token");
    // console.log(token);
    const result = verifyToken(token);
    if (result) {
      navigate("/contents");
    }
  };

  const handleLogIn = (e) => {
    e.preventDefault();
    if (userEmail === "" || password === "") {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
      const token = LogIn(userEmail, password);

      handleRouteChange(token);
    }
  };

  return (
    <div className="body">
      <div className="left_side_body">
        <div className="heading">
          <h1>
            <b>
              Design APIs fast, <br className="br" /> Manage content easily.
            </b>
          </h1>
        </div>
      </div>
      <div className="right_side_body">
        <div className="login_form_body">
          <div className="login_form">
            <h2>Login to your CMS+ account</h2>
            <div className="inpur_form_body">
              <div className="email">
                <p>Email</p>
                <input
                  className="input"
                  type="text"
                  name="email"
                  onChange={userSignInHandler}
                />
              </div>
              <div className="password">
                <p>Password</p>
                <input
                  className="input"
                  type="password"
                  name="password"
                  onChange={userPasswordHandler}
                />
              </div>
              <div className="button">
                <button
                  className="button_color"
                  type="submit"
                  onClick={handleLogIn}
                >
                  Log In
                </button>
                <p className="forgot_password">Forgot password?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
