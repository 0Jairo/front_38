import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { CrearEstudiante } from "./CrearEstudiante.jsx";
import { ListarEstudiantes } from "./ListarEstudiantes.jsx";

export const Menu = (props) => {
  const [option, setOption] = useState("");

  function onClickRegistrar() {
    setOption("CrearEstudiante");
  }

  function onClickListar() {
    setOption("ListarEstudiantes");
  }

  function cerrarSesion() {
    document.getElementById("caja_menu").style.display = "none";
    document.getElementById("form_login").style.display = "block";
    document.getElementById("txtusu").value = "";
    document.getElementById("txtpass").value = "";
    document.getElementById("txtusu").focus();
  }

  return (
    <>
      <div id="caja_menu" style={{ textAlign: "left" }}>
        <strong className="h3">
          Bienvenido Usuario : {props.usuario.toUpperCase()}
        </strong>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <label className="navbar-brand h5">Menú Principal</label>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle Navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <NavLink
                  className="nav-link h5 text-center"
                  onClick={onClickRegistrar}
                >
                  Registrar Estudiante
                </NavLink>
                <NavLink
                  className="nav-link h5 text-center"
                  onClick={onClickListar}
                >
                  Listar Estudiantes
                </NavLink>
                <a
                  className="nav-link h5 text-center"
                  style={{ color: "blue" }}
                  href=" "
                  onClick={cerrarSesion}
                >
                  Cerrar Sesión
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {option === "CrearEstudiante" && <CrearEstudiante />}
      {option === "ListarEstudiantes" && <ListarEstudiantes />}
    </>
  );
};
