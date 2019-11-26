import './App.css';
import AllPlayer from "./component/AllPlayer";
import * as React from "react";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <AllPlayer url={"https://www.youtube.com/watch?v=zyzGRbbha3"}/>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
