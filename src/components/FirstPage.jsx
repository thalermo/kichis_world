//! READY TO USE, waiting for routing

import './FirstPage.css';
import './bubbles.css';

import { useState, useEffect } from 'react';
import welcome from './bubble_texts/welcome_text';

const FirstPage = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [conPassword, setConPassword] = useState('');

  const [eUserName, setEUserName] = useState('');
  const [eEmail, setEEmail] = useState('');
  const [ePassword, setEPassword] = useState('');
  const [eConPassword, setEConPassword] = useState('');

  const [uColor, setUColor] = useState('');
  const [eColor, setEColor] = useState('');
  const [pColor, setPColor] = useState('');
  const [conPcolor, setConPcolor] = useState('');

  const [show, setShow] = useState(false);

  let UserInfo = [];

  useEffect(() => {
    setInterval(() => setShow(true), 8000);
  }, []);

  const validate = () => {
    console.log(userName, email, password, conPassword);
    UserInfo = [
      { userName: userName },
      { email: email },
      { password: password },
      { conPassword: conPassword },
    ];

    // push the information to the last property in the welcome array
    welcome.push(UserInfo);

    if (userName.length > 8) {
      setEUserName('');
      setUColor('green');
    } else {
      setEUserName('Username must contain at least 8 characters');
      setUColor('red');
    }

    if (email.includes('@gmail')) {
      setEEmail('');
      setEColor('green');
    } else {
      setEEmail('this website accepts just an email address from Gmail');
      setEColor('red');
    }

    if (password.length > 8) {
      setEPassword('');
      setPColor('green');
    } else {
      setEPassword('Please enter a password with at least 8 digits');
      setPColor('red');
    }

    if (password != '' && password === conPassword) {
      setEConPassword('');
      setConPcolor('green');
    } else {
      setEConPassword('Passwords not matched');
      setConPcolor('red');
    }
  };

  return (
    <div className="page1">
      <div className=" frame">
        <div className="bubble_speech_bg">
          {!show ? (
            <h1 className="type_effect title">Welcome to Kichi's World!</h1>
          ) : (
            <h1 className="type_effect title">Please fill out the form</h1>
          )}
        </div>

        <div className="brand-logo pixel-border"></div>
        <div className="form-inputs">
          <div className="input-field">
            <input
              type="text"
              placeholder="username"
              className="form-input"
              style={{ borderColor: uColor }}
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
            <small>{eUserName}</small>
          </div>
          <div className="input-field">
            <input
              type="text"
              placeholder="email"
              className="form-input"
              style={{ borderColor: eColor }}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <small>{eEmail}</small>
          </div>
          <div className="input-field">
            <input
              type="password"
              placeholder="password"
              className="form-input"
              style={{ borderColor: pColor }}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <small>{ePassword}</small>
          </div>
          <div className="input-field">
            <input
              type="text"
              placeholder="confirm password"
              className="form-input"
              style={{ borderColor: conPcolor }}
              value={conPassword}
              onChange={(e) => {
                setConPassword(e.target.value);
              }}
            />
            <small>{eConPassword}</small>
          </div>
          <div className="input-field">
            <button className="submit-btn " onClick={validate}>
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
