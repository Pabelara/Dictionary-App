import Dictionary from "./Dictionary";
import Credits from "./Credits";
import "./dictionary.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <Dictionary defaultKeyword="sunrise" />
        </header>
        <hr />
        <Credits />
      </div>
    </div>
  );
}

export default App;
