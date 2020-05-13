import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="sign-up">
        <div className="header-logo"></div>
        <div className="header">
          <input id="lastName" placeholder="ОВОГ"></input>
          <input id="firstName" placeholder="НЭР"></input>
          <input id="phoneNumber" placeholder="УТАСНЫ ДУГААР"></input>
          <input id="gmail" placeholder="И-МЭЙЛ ХАЯГ"></input>
        </div>
        <div className="dashed-container"></div>
        <div className="bottom">
          <button className="save">ХАДГАЛАХ</button>
        </div>
      </div>
    </div>
  );
}

export default App;
