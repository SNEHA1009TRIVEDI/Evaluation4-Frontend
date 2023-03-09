//create a component for user login and password
import React, { useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import makeRequest from '../../utils/makeRequest/index';
import { LOGIN_USER } from '../../constants/apiEndPoints';
import './Auth.css';
const Auth = () => {

const navigate = useNavigate();
// const [ loginData, setloginData ] = useState({
//   email: '',
//   password: '',
// });
  
// const handleChange = (event) => {
//   switch(event.target.name) {
//   case 'email': setloginData({ ...loginData, email: event.target.value }); break;
//   case 'password': setloginData({ ...loginData, password: event.target.value }); break;
//   default: 
//   }
// };
  
// const handleSubmit = async() => {
//   try {
//     const response =  await makeRequest(
//       LOGIN_USER,
//       {
//         data: {
//           user: loginData.email,
//           password: loginData.password,
//         },
//       },
//     );
//     localStorage.setItem('jwt_token', response.data.token);
    
//   } catch (e) {
//     const errorStatus = e.response?.status;
//     if (errorStatus) {
//       navigate(`error/${errorStatus}`);
//     } else {
//       navigate('error');
//     }
//   }
// };
// const Login = () => {
//     const navigate = useNavigate();
//     const routeChange = () =>{ 
//       const path = '/home'; 
//       navigate(path);
//     };
//  // States for registration
 const [name, setName] = useState('');
//  // const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');

//  // States for checking the errors
 const [submitted, setSubmitted] = useState(false);
 const [error, setError] = useState(false);

//  // send email and password to auth server
 const register = async (name, password) => {
    const response = await fetch('http://localhost:3000/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: name,
        password: password,
      }),
    });
    const data = await response.json();
    console.log(data);
    
  };

//   const login = async (email, password) => {
//     const response = await fetch('http://localhost:3000/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         username: email,
//         password: password,
//       }),
//     });
//     const data = await response.json();
//     console.log(data);
//     localStorage.setItem('token', data.token);
//   };

  const handleNameRegister = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };

//   const handleNameLogin = (e) => {
//     setName(e.target.value);
//     setSubmitted(false);
//   };
  const handlePasswordRegister = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

//   const handlePasswordLogin = (e) => {
//     setPassword(e.target.value);
//     setSubmitted(false);
//   };
 
const routeChange = () =>{
    // const navigate = useNavigate();
    const path = '/login';
    navigate(path);
    };


  const handleSubmitRegister = (e) => {
    e.preventDefault();
    if (name === '' || password === '') {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
      register(name, password);
        // navigate to dashboard
        alert('Registration Successful please click okay to login to the account');
        routeChange();
    }
  };

//   const handleSubmitLogin= (e) => {
//     e.preventDefault();
//     if (name === '' || password === '') {
//       setError(true);
//     } else {
//       setSubmitted(true);
//       setError(false);
//       login(name, password);
//       // navigate to dashboard
//       routeChange();
//     }
//   };


return (
  <div className='body'>
    <div className='left_side_body'>
      <div className='heading'>
        Design APIs fast, <br /> Manage Content Easily
      </div>
    </div>
    <div className='right_side_body'>
      <div >
        <div className='login_form'>
          <p>Login to your CMS+ account</p>
          <div>
            <div>
              <p>Email</p>
              <input type='text'  name='email' onChange={handleNameRegister} />
              
            </div>
            <div>
              <p>Password</p>
              <input type='password'  name='password' onChange={handlePasswordRegister}/>
            </div>
            <button type="submit" onClick={handleSubmitRegister} >Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  </div>
);
  
};

export default Auth;
