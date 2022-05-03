import './Buttons.css';

export const PlusButton = () => {
  return (
    <div className="plus-minus--buttons ">
      <div className="video-game-button plus-grid">+</div>
    </div>
  );
};

export const MinusButton = () => {
  return (
    <div className="plus-minus--buttons ">
      <div className="video-game-button minus-grid">-</div>
    </div>
  );
};

export const SelectButton = () => {
  return (
    <div className="StartButton_container">
      <span className="start-btn">SELECT</span>;
    </div>
  );
};

export const StartButton = () => {
  return <span className="start-btn">START</span>;
};

export const SubmitBtn = () => {
  return <button className="submit-btn ">SUBMIT</button>;
};

export const Tasuku = (props) => {
  return (
    <button onClick={props.action} className="submit-btn ">
      TASUKU
    </button>
  );
};

export const TodoBtn = (props) => {
  return (
    <button onClick={props.action} className="submit-btn setTasuku">
      SET TASUKU
    </button>
  );
};

// export const PlusButton = () => {
//   return (
//     <div className="plus-minus--buttons ">
//       <div className="video-game-button plus-grid">+</div>
//       <div className="video-game-button minus-grid">-</div>
//     </div>
//   );
// };
