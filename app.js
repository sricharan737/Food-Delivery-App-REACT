/**
 * <div id = "parent">
 *      <div id= "child">
 *      <h1>I am h1 tag</h1>
 *      <h2>I am h2 tag</h2>
 *      </div>
 * </div>
 */


const parent = React.createElement(
    "div", 
    {id: "parent"},[
    React.createElement(
        "div", 
        {id: "child"},
        [React.createElement("h1", {},"I am h1 tag"),
        React.createElement("h2", {},"I am h2 tag")]
    ),
    React.createElement(
        "div", 
        {id: "child1"},
        [React.createElement("h1", {},"I am h1 tag"),
        React.createElement("h2", {},"I am h2 tag")]
    ) ] 
); 



//const heading = React.createElement("h1", {id : "heading", xyz: "abc"},"Hello World with React");

console.log(parent); //this is a object, hence the log returns a object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent); //converts the heading object to a h1 tag to put it on the display

//all the react elements are objects