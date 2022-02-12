import React from "react";
import ReactDOM from "react-dom";

import App from "./Components/App.jsx";

// good referencing for style guide (Airbnb React) github.com/airbnb/javascript/tree/master/react#spacing

ReactDOM.render(
  /* 
    Usually in index.js react apps there is no html elements eg div,
    H1 it just has a custom component called app with a custom 
    file called app.jsx

    <div>
      When writing nothing inside its best practice to have a self
      closing tag 
      <Heading />
      <List />
    </div>
  */

  <App />,
  document.getElementById("root")
);
