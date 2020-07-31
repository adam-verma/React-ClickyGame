import React from "react";
import "../Wrapper/style.css";

function Wrapper(props) {
  return <div type="button" className="wrapper">{props.children}</div>;
}

export default Wrapper;
