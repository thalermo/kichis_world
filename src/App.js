import React, { useEffect, useState } from 'react';

// script js file with array and objects
import welcome from './components/bubble_texts/welcome_text';

// figure bubble speech above and user bubble underneath the figure
import BubbleKichi from './components/BubbleKichi';
//import BubbleUser from './components/BubbleUser';

// just the figure with click function
import Kichi from './components/Kichi';

// the btns components
import { SelectButton, SubmitBtn } from './components/Buttons';
//import { StartButton, PlusButton, SelectButton } from './components/Buttons';

// Pages display as components
import FirstPage from './components/FirstPage';

// CSS files:
import './App.css';

function App() {
  // state for iteration the welcome_text array
  const [indexCounter, setIndexCounter] = useState(1);
  const [status, setStatus] = useState('');
  console.log(status);
  // const [show, setShow] = useState(false);

  // info state, to get inputs from the user

  // useEffect(() => {
  //   setInterval(() => setShow(true), 5000);
  // }, []);

  // clicking on the figure will iterating the text array
  const handleFigureClick = () => {
    setIndexCounter(indexCounter + 1);
    console.log('click');
    console.log(indexCounter);
  };

  return (
    <div className="App">
      {status === '' && <FirstPage status={status} setStatus={setStatus} />}
      {status === 'yes' && (
        <div className="stage">
          <BubbleKichi text={welcome} indexCounter={indexCounter} />
          <Kichi action={handleFigureClick} />
          <SubmitBtn />
        </div>
      )}
    </div>
  );
}

export default App;
