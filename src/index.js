import React from "react";
import ReactDOM from "react-dom";
import './style.css'
import App from './App'
import Button from './Button'

ReactDOM.render(<App/>,document.getElementById("root"));



function Passed() {
	return <h1>passed congrats!</h1>;
}

function Failed() {
	return <h1>failed better luck next time!</h1>;
}

function Result(props) {
  const isResult = props.isResult;
  if (isResult) {
    return <Passed/>;
  }
  return <Failed/>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Result isResult={false} />);