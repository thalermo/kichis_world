import './App.css';
import welcome from './components/bubble_texts/welcome_text';
import Bubble from './components/Bubble';
import React, { useState } from 'react';
import Kichi from './components/Kichi';
import { StartButton, PlusButton, SelectButton } from './components/Button';

// import "./index.css";

function App() {
  const [indexCounter, setIndexCounter] = useState(0);
  // declare the name of the user

  const [userInfo, setUserInfo] = useState({
    id: '',
    user: '',
    task: '',
    time: '',
  });

  const handleFigureClick = () => {
    // setIndexCounter(indexCounter + 1);

    setUserInfo({ ...userInfo, user: 'Dan' });
    //setUserInfo({task: varible})
    // setUserInfo({ ...userInfo, task: 'hit the gym' });
  };

  return (
    <div className="App">
      <div className="stage">
        <Bubble currentIndex={indexCounter} text={welcome} />
        <Kichi action={handleFigureClick} />

        <SelectButton />

        <PlusButton />
      </div>
    </div>
  );
}

export default App;
