//create a component for user login and password
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
const Login = () => {
  const [user, setUser] = useState([]);
  const [password, setPassword] = useState([]);
  const [submit, setSubmit] = useState(false);
  const navigate = useNavigate();

  const userSignInHandler = (e) => {
    setUser(e.target.value);
  };

  const LogIn = async (user, password) => {
    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: user,
        password: password,
      }),
    });
    const data = await response.json();
    if (data.success === true) {
      if (submit) {
        navigate("/contents");
      }
    } else {
      alert("Invalid username or password");
      window.location.reload();

    }
    console.log(data);
  };

  const userPasswordHandler = (e) => {
    setPassword(e.target.value);
  };

  const handleLogIn = () => {
    setSubmit(true);
  };

  if (submit) {
    LogIn(user, password);
  }

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
