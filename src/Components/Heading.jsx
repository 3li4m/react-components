// .jsx extension is used for all individuall components .js is used for index
import React from "react";

// in react its convention to give titles in pascal case
// allows for react to differentiate between conventional html
// and out function headings
function Heading() {
  return <h1>My Favourite Foods</h1>;
}

// without parenthesis so its does not call it immediatly and allows
// us to call it within index.js/use it as a component
export default Heading;
