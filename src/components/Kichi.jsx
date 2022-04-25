import kichi from '../images/kichi.webp';
import './Kichi.css';

const Kichi = (props) => (
  // wrap it in a div so I can add the onClick attribute
  <div className="figure_container" onClick={props.action}>
    <img src={kichi} alt="Kichi" className="figure" />
  </div>
);

export default Kichi;
