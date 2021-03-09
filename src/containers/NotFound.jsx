import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/components/NotFound.scss";

const NotFound = () => (
  <React.Fragment>
    <h1>404 No encontrado</h1>
    <section className="error-container">
      <span className="four">
        <span className="screen-reader-text">4</span>
      </span>
      <span className="zero">
        <span className="screen-reader-text">0</span>
      </span>
      <span className="four">
        <span className="screen-reader-text">4</span>
      </span>
    </section>
    <div className="link-container">
      <Link to="/" className="more-link">Regresa al Home</Link>
    </div>
  </React.Fragment>
);

export default NotFound;
