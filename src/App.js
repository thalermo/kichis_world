import "./App.css";
import welcome from "./components/bubble_texts/welcome_text";
import Bubble from "./components/Bubble";
import Kichi from "./components/Kichi"; 

// import "./index.css";

function App() {
  return (
    <div className="App">
      <div className="stage">
        {welcome.map((element) => (
          <Bubble key={element.key} text={element.phrase} />
        ))}
        <Kichi/>
      </div>
    </div>
  );
}

export default App;
