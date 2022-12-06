import React from "react";
import ReactDOM from "react-DOM";

const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Jazzy",
      animal: "dog",
      breed: "big-eared cutie",
    }),
    React.createElement(Pet, {
      name: "Bo",
      animal: "Dog",
      breed: "bat-like dog creature",
    }),
    React.createElement(Pet, {
      name: "Rascal 2",
      animal: "hamster",
      breed: "pet store type of hamster",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
