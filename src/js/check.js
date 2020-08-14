import React from "react";

export default function App() {
    const HeaderFromCreateElement = React.createElement(
      "h1",
      null,
      "Webpack and React"
    );
  
    return (
      <div className="App">
        {HeaderFromCreateElement}
      </div>
    );
  }
  