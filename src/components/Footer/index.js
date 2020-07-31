import React from "react";
import "../Footer/style.css";

function Footer( props ) {
  const { gameName, children} = props
  return ( 
  <footer>
    <div className="project-link">
      <a title="Remember the Sports Titans" href="https://github.com/adam-verma/React-ClickyGame">{gameName}</a>
    </div>
    <div className="copyright">
  <span> &copy; 2019-2020 Adam Verma </span> 
      {children}
    </div>
  </footer>
  )
}

export default Footer;
