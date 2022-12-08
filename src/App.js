import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
      {/* <Pet name="Jazzy" animal="dog" breed="big-eared cutie" />
      <Pet name="Bo" animal="dog" breed="batlike creature" />
      <Pet name="Rascal2" animal="hamster" breed="petstore hammie" /> */}
    </div>
  );
};

render(<App />, document.getElementById("root"));
