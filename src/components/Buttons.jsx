import './Buttons.css';

export const PlusButton = () => {
  return (
    <div className="plus-minus--buttons ">
      <div className="video-game-button plus-grid">+</div>
      <div className="video-game-button minus-grid">-</div>
    </div>
  );
};

export const MinusButton = () => {
  return;
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
