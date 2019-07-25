import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", { id: "something" }, [
    React.createElement("h1", {}, "Adopt Me"),
    React.createElement(Pet, {
      name: "Keanu",
      animal: "Cat",
      colour: "Black"
    }),
    React.createElement(Pet, {
      name: "Diablo",
      animal: "Snake",
      colour: "Rainbow"
    }),
    React.createElement(Pet, {
      name: "Mephisto",
      animal: "Snake",
      colour: "Green and Brown"
    })
  ]);
};

render(React.createElement(App), document.getElementById("root"));
