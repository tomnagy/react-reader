import React from "react";
import ReactDOM from "react-dom";
import router from "react-router-dom";
import routerDOM from "react-router-dom";

import tree from "../book/tree.json";
import content from "../book/SC.1.json";

import "./styles.css";

function App() {
  function createMarkup() {
    const elements = content.elements.middle.map(el => el.html);
    return { __html: elements };
  }

  return (
    <div className="App">
      <div dangerouslySetInnerHTML={createMarkup()} />;
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
