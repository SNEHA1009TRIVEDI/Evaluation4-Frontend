//create a component for user login and password
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./Login.css";
const Login = () => {
    const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const handleNameLogin = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };
  const handlePasswordLogin = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  const routeChange = () => {
    const path = "/contents";
    navigate(path);
  };

  const login = async (name, password) => {
    const response = await fetch("http://localhost:3000/login", {
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
    console.log(data);
    localStorage.setItem("token", data.token);
  };

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    if (name === "" || password === "") {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
      login(name, password);
      // navigate to dashboard
      routeChange();
    }
  };

  return (
    <div className="body">
      <div className="left_side_body">
        <div className="heading">
          Design APIs fast, <br /> Manage Content Easily
        </div>
      </div>
      <div className="right_side_body">
        <div>
          <div className="login_form">
            <p>Login to your CMS+ account</p>
            <div>
              <div>
                <p>Email</p>
                <input type="text" name="email" onChange={handleNameLogin} />
              </div>
              <div>
                <p>Password</p>
                <input
                  type="password"
                  name="password"
                  onChange={handlePasswordLogin}
                />
              </div>
              <button type="submit" onClick={handleSubmitLogin}>
                Log In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
