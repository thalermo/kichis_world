// import welcome from "./bubble_texts/welcome_text";
import './bubble.css';
import welcome from './bubble_texts/welcome_text';

function BubbleUser(props) {
  const something = (event) => {
    if (event.keyCode === 13) {
      //console.log('enter');
      //let originalUser = props.userInfo;
      props.setUserInfo({ ...props.userInfo, user: event.target.value });
      console.log(props.userInfo);
      // welcome[6].phrase = 'we made it';
      welcome[6].phrase = `Hello ${event.target.value}`;

      console.log(welcome);
    }
  };

  return (
    <div className="bubble_speech_bg">
      {props.action === 4 && (
        <div>
          <input
            className="user-input"
            type="text"
            onKeyDown={(e) => something(e)}
          />
        </div>
      )}
    </div>
  );
}

export default BubbleUser;
