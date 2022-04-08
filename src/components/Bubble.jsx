import welcome from "./bubble_texts/welcome_text";
import "./bubble.css";

function Bubble() {
  return (
    <div className="iphone_se_resolution">
      <p className="typewriter speech_style">{welcome.scene1.phrase}</p>
    </div>
  );
}

export default Bubble;
