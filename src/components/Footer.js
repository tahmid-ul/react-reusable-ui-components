import React from "react";
import "./Footer.css";

function Footer(params) {
  return (
    <div className="footer">
      <span className="footer__credits">
        Icons:{" "}
        <a
          href="https://material-ui.com/components/material-icons/"
          target="_blank"
        >
          https://material-ui.com/components/material-icons/
        </a>
      </span>
      <span className="footer__copyright">
        Tahmid ul karim @ DevChallenges.io
      </span>
    </div>
  );
}

export default Footer;
