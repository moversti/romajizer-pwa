import React, { useState } from "react";
import "./App.css";
import Boksi from "./Boksi";

function App() {
  const [value, setValue] = useState("");
  return (
    <div className="App">
      <div className='areacontainer'>
      <h5>Romaji:</h5>
        <Boksi to="r" value={value} setValue={setValue} />
      </div>
      <div className='areacontainer'>
      <h5>Hiragana:</h5>
        <Boksi to="k" value={value} setValue={setValue} />
      </div>
    </div>
  );
}

export default App;
