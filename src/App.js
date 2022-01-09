import React from "react";
import "./App.css";

function App() {
  let counter = 1;
  return (
    <div className="reactTest">
      <h1>Hello React</h1>
      <button onClick={console.log(counter + 1)}></button>
    </div>
  );
}

export default App;
