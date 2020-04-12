import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Hello = (props) => {
  return (
    <div>
      <p>
        Hello {props.name}, ba wo {props.qua} {props.orisi} {props.age}
      </p>
    </div>
  );
};

const App = () => {
  const now = new Date();
  const name = "Yemi";
  const qua = "lovely";
  const orisi = "babe";
  const age = 20;
  return (
    <div className="app">
      <h1>Greetings! It is {now.toDateString()}</h1>
      <Hello name="Olabisi" qua="pretty" orisi="baby" age={age} />
      <Hello name="Nathan" qua="handsome" orisi="boo" />
      <Hello name={name} qua={qua} orisi={orisi} />
      <Hello name={name} qua={qua} orisi={orisi} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
