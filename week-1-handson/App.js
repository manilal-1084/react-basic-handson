

// const heading = React.createElement(
//     "h1",
//     {id: "heading", xyz:"abc"},
//     "Hello World from React!!"
// );

// console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


// --------------------------------------------------------------------------------------


const parent = React.createElement(
    "div",
    {id:"parent"},
    React.createElement(
        "div",
        {id:"child"},
        React.createElement("h1",{},"I'm a h1 tag")
    )
);
console.log(parent); //object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
