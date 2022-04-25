// import welcome from "./bubble_texts/welcome_text";
import './bubbles.css';
import welcome from './bubble_texts/welcome_text';

function BubbleUser(props) {
  const something = (event) => {
    if (event.keyCode === 13) {
      props.setUserInfo({ ...props.userInfo, user: event.target.value });
      console.log(props.userInfo);

      welcome[6].phrase = `Nice to meet you ${event.target.value}`;
      console.log(welcome);
    }
  };

  return (
    <>
      {props.action === 4 && (
        <div className="bubble_speech_bg">
          <div>
            <input
              placeholder="write here your name..."
              className="user-input"
              type="text"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default BubbleUser;
