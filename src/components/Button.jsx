import "./Button.css";

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
  return <span className="start-btn">SELECT</span>;
};

export const StartButton = () => {
  return <span className="start-btn">START</span>;
};
