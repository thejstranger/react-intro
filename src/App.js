import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1 id="something">Adopt Me!</h1>
      <SearchParams />
      <Pet name="Keanu" animal="Cat" colour="Black" />
      <Pet name="Diablo" animal="Snake" colour="Rainbow" />
      <Pet name="Mephisto" animal="Snake" colour="Green and Brown" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
