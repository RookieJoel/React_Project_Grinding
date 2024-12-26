import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [inputValue, setInputValue] = useState("");

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function UpdateName() {
    setName(inputValue);
  }

  return (
    <div className="container">
      <h1>Hello {name}</h1>
      <input
        type="text"
        placeholder="What's your name?"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={UpdateName}>Submit</button>
    </div>
  );
}

export default App;
