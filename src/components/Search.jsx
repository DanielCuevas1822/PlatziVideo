import React from "react";
import classNames from "classnames";
import "../assets/styles/components/Search.scss";
import { serchVideos } from "../actions";
import { connect } from "react-redux";

const Search = ({ isHome, serchVideos }) => {
  const inputStyle = classNames("input", {
    isHome,
  });

  return (
    <section className="main">
      <h2 className="main__title">¿Qué quieres ver hoy?</h2>
      <input
        type="text"
        className={inputStyle}
        placeholder="Buscar..."
        onChange={(e) => {
          serchVideos(e.target.value);
        }}
      />
    </section>
  );
};

const mapDispatchToProps = {
  serchVideos,
};

export default connect(null, mapDispatchToProps)(Search);
