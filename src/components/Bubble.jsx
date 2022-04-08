// import welcome from "./bubble_texts/welcome_text";
import "./bubble.css";

function Bubble(props) {
  return (
    <div className="bubble_speech_bg">
      <div className="type_effect">{props.text}</div>
    </div>
  );
}

export default Bubble;

/* <div className="bubble_speech_bg">
<div className="type_effect">{welcome.scene2.phrase}</div>
</div>
<div className="bubble_speech_bg">
<div className="type_effect">{welcome.scene3.phrase}</div>
</div>
<div className="bubble_speech_bg">
<div className="type_effect">{welcome.scene4.phrase}</div>
</div>
<div className="bubble_speech_bg">
<div className="type_effect">{welcome.scene5.phrase}</div>
</div>
<div className="bubble_speech_bg">
<div className="type_effect">{welcome.scene6.phrase}</div>
</div>
<div className="bubble_speech_bg">
<div className="type_effect">{welcome.scene7.phrase}</div>
</div> */
