import React from "react";
import ReactDOM from "react-dom"

// React.createElement => ReactElemet - JS object => HTMLElement(render)
// React Element
const title = 
 (<h1 
className="title">
    Namaste React using JSX
</h1>)

// React Component
// Class Based Component - OLD
// Functional Component - NEW 

const HeadingComponent1 = () => {
    return <h1>React Functional Component - </h1>
}
// component composition
const HeadingComponent = () => (
    
    <div id="container">
        {title}
<h1>React Functional Component - Just a normal javascript fuction returns a react element </h1>
</div>
)
// Both headingComponents are same


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( <HeadingComponent/>);
