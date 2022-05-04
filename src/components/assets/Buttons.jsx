import './Buttons.css';
import exit from '../../images/exit_btn.jpeg';

export const PlusButton = (props) => {
  return (
    <div className="plus-minus--buttons ">
      <button
        onClick={props.action}
        className="video-game-button plus-grid plus"
      ></button>
    </div>
  );
};

export const MinusButton = (props) => {
  return (
    <div className="plus-minus--buttons ">
      <button
        onClick={props.action}
        className="video-game-button minus-grid minus"
      ></button>
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
    <button onClick={props.action} className="submit-btn" id="enter">
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

export const Exit = (props) => {
  return <div className="exit-image" onClick={props.action} />;
};

export const TurnonBtn = (props) => {
  return <div className="turnon-image" onClick={props.action} />;
};
