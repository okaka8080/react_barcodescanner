import './App.css';

import React, { useState } from "react";
import Scanner from "./components/Scanner";
import ReactDOM from "react-dom";

export const CameraState = React.createContext();

function App() {
  const [camera, setCamera] = useState(false);
  const [result, setResult] = useState(null);

  const onDetected = result => {
    setResult(result);
  };

  return (
    <div className="App">
      <p>{result ? result : "バーコードを写してください。"}</p>
      <button onClick={() => setCamera(!camera)}>
        {camera ? "Stop" : "Start"}
      </button>
      <div className="container">
        {camera && <Scanner onDetected={onDetected}/>}

      </div>
    </div>
  );
}


const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
