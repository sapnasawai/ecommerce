import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css"

export const Footer = () => {
  return (
    <footer className="footer flex-column-center gap-sm">
      <p>Made with 🤍 by Sapna Sawai</p>
      <ul className="footer-list flex-center gap-lg font-weight-bold">
       
        <li>
          <Link
            to="https://github.com/sapna-sawai"
            className="social-link"
            target="_blank"
          >
            <i className="fab fa-github"></i>
          </Link>
        </li>
        <li>
          <Link
            to="https://www.linkedin.com/in/sapna-sawai-42347821b/"
            className="social-link"
            target="_blank"
          >
            <i className="fab fa-linkedin"></i>
          </Link>
        </li>
      </ul>
    </footer>
  );
};
