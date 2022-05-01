import React, { useState } from 'react';
// script js file with array and objects
import welcome from './bubble_texts/welcome_text';

// figure bubble speech above and user bubble underneath the figure
import BubbleKichi from './assets/BubbleKichi';

// just the figure with click function
import Kichi from './assets/Kichi';

// the btns components
import { SubmitBtn } from './assets/Buttons';

// CSS files:
import '../App.css';

const Dashboard = () => {
  // state for iteration the welcome_text array
  const [indexCounter, setIndexCounter] = useState(1);
  //const [status, setStatus] = useState('');
  //console.log(status);
  //const [show, setShow] = useState(false);

  // info state, to get inputs from the user

  // useEffect(() => {
  //   setInterval(() => setShow(true), 5000);
  // }, []);

  //! clicking on the figure will iterating the text array
  const handleFigureClick = () => {
    setIndexCounter(indexCounter + 1);
    //   console.log('click');
    //   console.log(indexCounter);
  };

  return (
    <div className="stage">
      <BubbleKichi text={welcome} indexCounter={indexCounter} />
      <Kichi action={handleFigureClick} />
      <SubmitBtn />
    </div>
  );
};

export default Dashboard;
