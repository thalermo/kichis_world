import kichi from "../images/kichi.webp";
const Kichi = (props) => (
    // wrap it in a div so I can add the onClick attribute
    <div onClick={props.action}>
      <img src={kichi} alt="Kichi" className="App-logo" />
    </div>
  );
  
  export default Kichi;