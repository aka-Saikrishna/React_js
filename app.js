import React from "react";
import ReactDOM from "react-dom"

// React.createElement => ReactElemet - JS object => HTMLElement(render)
// this is too hard to read and in the sence of developer frendly too.

// So, react develpers introduced "JSX"

// JSX - Html like or XML like syntax
// JSX - transpiled before it reaches to JS by parcelwith the help of babel
// How JSX works 
// JSX => React.createElement => ReactElemet - JS object => HTMLElement(render)
const jsxHeading = <h1 id="heading">Namaste React using JSX</h1>

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( jsxHeading);
