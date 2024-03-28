import React from "react";
import ReactDOM from "react-dom/client"

//React Element => Object =After Render> HTML element

//const heading = React.createElement("h1", {id:"heading"}, "React");

//JSX - HTML like syntax
//JSX => React.createElement => ReactElement-JS object  => HTML element(render)


//React element using jsx
const Title = () => (
    <h1 id="heading" className="headings">
        REACT using JSX
    </h1>
);

// React element inside a element
const elem = <span>React element</span>;


const titleElement = (
    <h2 id="heading" className="headings">
        {elem}REACT element
    </h2>
);

//React Functional Component

// const HeadingComponent = () => {
//     return <h1>React heading using react component</h1>
// }; OR



const HeadingComponent = () => (
    <div className= "contatiner">
        <Title />
        {titleElement}
        <h1 className = "heading">React heading using react component</h1>
    </div>    
);

const data = 1000;
const title = (
    <h1>"Allahu Akbhar
    {titleElement}
    {data}
    <Title />
    </h1>
    
);




//console.log(heading);
//console.log(jsxheading);

const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(jsxheading); //syntax to render a react element
//root.render(<HeadingComponent />) // syntax to render the react functional component
root.render(title)