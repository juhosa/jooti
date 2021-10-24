import TextLoop from "react-text-loop";
import "./App.css";
import names from "./data/names";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <span>Jööti on </span>
          <TextLoop>
            {names.map((asia) => {
              return <code>{asia}</code>;
            })}
          </TextLoop>
          .
        </div>
      </header>
    </div>
  );
}

export default App;
