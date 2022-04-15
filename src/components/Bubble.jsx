// import welcome from "./bubble_texts/welcome_text";
import "./bubble.css";

function Bubble(props) {
  return (
    <div className="bubble_speech_bg"> 
    {props.currentIndex < 5 ? <div className="type_effect">{props.text[props.currentIndex].phrase}</div>:<div><input type="text" id="name" name="name" /></div>}
    <div></div>
    </div>
  );
}

export default Bubble;
