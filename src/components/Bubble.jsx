// import welcome from "./bubble_texts/welcome_text";
import './bubble.css';

function Bubble(props) {
  return (
    <div className="bubble_speech_bg">
      <div className="type_effect">{props.text[props.currentIndex].phrase}</div>
    </div>
  );
}

export default Bubble;
