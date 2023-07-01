import React from "react";
import "./styles.css";

export default function Footer() {
  return (
    <div className="Footer">
      <footer>
      <a
          href="https://github.com/"
          target="_blank
"
        >
          {" "}
          Open-sourced{" "}
        </a>
        <span className="name"> by Anna Herasymeniuk </span>
        <br />
        <span>Hosted on </span>
        <a href="" target="_blank">
          Netlify
        </a>
        
      </footer>
    </div>
  );
}
