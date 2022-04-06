import "./App.css";
import welcome from "./components/bubble_component/bubble_texts/welcome_text";
import Bubble from "./components/bubble_component/Bubble";
// import "./index.css";

console.log("hey App");

function App() {
  return (
    <div className="App">
      <Bubble className="typewriter" />
    </div>
  );
}

export default App;

console.log(welcome);
