import React from "react";
import ReactDOM from "react-dom";

const Index = () => {
  return <div>Hello React</div>;
};

const anchor = document.createElement('div');
anchor.id = 'mooncake';

document.body.insertBefore(anchor, document.body.childNodes[0]);

ReactDOM.render(<Index />, document.getElementById('mooncake'));

// Star consolo.log /
console.log('%c Mooncake is here bitches', 'background: #8FFE09; color: white; font-size:40px; display: block;');
