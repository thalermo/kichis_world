import kichi from '../../images/kichi_figure.png';
import kichi3ph from '../../images/kichi2hp.png';
import kichi1ph from '../../images/kichi1hp.png';
import './Kichi.css';

const Kichi = (props) => (
  // wrap it in a div so I can add the onClick attribute
  <div className="figure_container" onClick={props.action}>
    {/* <img id="hover-me" src={kichi} alt="Kichi" className="figure" /> */}
    {/* <img id="hover-me" src={kichi3ph} alt="Kichi" className="figure" /> */}
    <img id="hover-me" src={kichi1ph} alt="Kichi" className="figure" />
  </div>
);

export default Kichi;
