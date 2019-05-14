import React, { useState } from "react";
import "./App.css";
import Boksi from "./Boksi";

function App() {
  const [value, setValue] = useState("");
  return (
    <div className="App">
      <div className='areacontainer'>
        <Boksi to="r" value={value} setValue={setValue} />
      </div>
      <div className='areacontainer'>
        <Boksi to="k" value={value} setValue={setValue} />
      </div>
    </div>
  );
}

export default App;
