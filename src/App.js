import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [showText, setShowText] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  let open = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    console.log("Mounting");
    return () => {
      console.log("unmounting...");
    };
  }, []);

  return (
    <div className="App">
        <button onClick={open}>Show Text</button> <br />
      {isOpen && (
        <input
          type="text"
          onChange={event => {
            setShowText(event.target.value);
          }}
        />
      )}

      <h1>{showText}</h1>
    
    </div>
  );
}

export default App;
