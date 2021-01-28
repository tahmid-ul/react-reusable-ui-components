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
        <a href="https://github.com/tahmid-ul" target="_blank" rel="noreferrer">
          Tahmid ul karim
        </a>{" "}
        @{" "}
        <a href="https://devchallenges.io/" target="_blank" rel="noreferrer">
          devchallenges.io
        </a>
      </span>
    </div>
  );
}

export default Footer;
