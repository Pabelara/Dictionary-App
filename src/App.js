import "./App.css";
import Dictionary from "./Dictionary";
import Credits from "./Credits";
import "./Dictionary.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <Dictionary />
        </header>
        <hr />
        <Credits />
      </div>
    </div>
  );
}

export default App;
