import './App.css';
import welcome from './components/bubble_texts/welcome_text';
import Bubble from './components/Bubble';
import React, { useState } from 'react';
import Kichi from './components/Kichi';
import { StartButton, PlusButton, SelectButton } from './components/Button';
import BubbleUser from './components/BubbleUser';

// import "./index.css";

function App() {
  const [indexCounter, setIndexCounter] = useState(0);
  // declare the state with userInfo
  const [userInfo, setUserInfo] = useState({
    id: '',
    user: '',
    task: '',
    time: '',
  });

  // welcome[0].key = userInfo;
  // console.log(welcome);

  const handleFigureClick = () => {
    setIndexCounter(indexCounter + 1);

    setUserInfo({ ...userInfo, user: '' });

    // const userUpdate = welcome[6].phrase;
    // `Nice to meet you ${userInfo.user}`;
    //setUserInfo({task: varible})
    // setUserInfo({ ...userInfo, task: 'hit the gym' });
  };

  return (
    <div className="App">
      <div className="stage">
        <Bubble currentIndex={indexCounter} text={welcome} />
        <Kichi action={handleFigureClick} />
        <BubbleUser
          action={indexCounter}
          userInfo={userInfo}
          setUserInfo={setUserInfo}
        />
        <SelectButton />

        <PlusButton />
      </div>
    </div>
  );
}

export default App;
