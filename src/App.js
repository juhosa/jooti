import TextLoop from "react-text-loop";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <span>Jööti on </span>
          <TextLoop>
            <code>tutkimusrekisteri</code>
            <code>syysmyrsky</code>
            <code>julkaisujärjestelmä</code>
            <code>pötkylä</code>
            <code>eläin</code>
            <code>ajatushautomo</code>
            <code>kevätmyrsky</code>
          </TextLoop>
          .
        </div>
      </header>
    </div>
  );
}

export default App;
