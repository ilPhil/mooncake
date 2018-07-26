import React from "react";
import ReactDOM from "react-dom";

const Index = () => {
  return <div>Hello React!</div>;
};

const mountNode = document.createElement('div')
document.body.appendChild(mountNode)

ReactDOM.render(<Index />, mountNode);

console.log('ciao');
