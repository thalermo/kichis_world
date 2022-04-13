import { useMediaQuery } from "react-responsive";
import "./Stage.css";

const Stage = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });

  return (
    <div className="stage">
      <h1>Device Test!</h1>
      {isTabletOrMobile && <p>You are a tablet or mobile phone</p>}
      <p>Your are in {isPortrait ? "portrait" : "landscape"} orientation</p>
    </div>
  );
};
export default Stage;
