// import welcome from "./bubble_texts/welcome_text";
import './bubbles.css';

function BubbleKichi(props) {
  return (
    <div className="bubble_speech_bg">
      {props.currentIndex !== 5 && (
        <div className="type_effect">
          {props.text[props.currentIndex].phrase}
        </div>
      )}
    </div>
  );
}

export default BubbleKichi;
