import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  const X = React.Fragment;

  return (
    <div>
      foo
      <X></X>
      <style jsx>{`
        div {
          background: yellow;
        }
      `}</style>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
