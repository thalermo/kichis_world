//! READY TO USE, waiting for routing

import './Home.css';

import { useState, useEffect } from 'react';
//import welcome from './bubble_texts/welcome_text';

const Home = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);

  useEffect(() => {
    setInterval(() => setShow(true), 8000);
  }, []);

  // const handleLogout = () => {
  //   localStorage.removeItem('loggedIn');

  //   alert('click');
  // };

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem('users'));
    // start to write a loop like js6 for of!
    let i = 0;
    for (let user of users) {
      if (user.email === email && user.password === password) {
        i++;
      }
    }

    // if it's true, then iterate by one and show me the message
    if (i === 1) {
      alert('Login Successful');
      localStorage.setItem('loggedIn', 'yes');
    } else {
      alert('Invalid Login');
    }
  };

  return (
    <div className="page1 ">
      <div className=" frame ">
        <div className="bubble_speech_bg ">
          {!show ? (
            <h1 className="type_effect title ">Welcome to Kichi's World!</h1>
          ) : (
            <h1 className="type_effect title ">Login to get started</h1>
          )}
        </div>

        <div className="brand-logo pixel-border "></div>

        <div className="form-inputs ">
          <div className="input-field ">
            <input
              type="text"
              placeholder="email"
              className="form-input"
              // style={{ borderColor: eColor }}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            {/* <small>{eEmail}</small> */}
          </div>
          <div className="input-field">
            <input
              type="password"
              placeholder="password"
              className="form-input"
              // style={{ borderColor: pColor }}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            {/* <small>{ePassword}</small> */}
          </div>

          <div className="input-field">
            <button className="submit-btn login" onClick={handleLogin}>
              LOGIN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
