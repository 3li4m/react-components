// we will import everything except for react-dom
import React from "react";

// in es6 the extension eg .jsx is optional
import Heading from "./Heading";
import List from "./List";

// we will render our component as a function
function App() {
  return (
    <div>
      <Heading />
      <List />
    </div>
  );
}

export default App;
