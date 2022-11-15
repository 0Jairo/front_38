import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export const FilaEstudiante = (props) => {
  function borrarEstudiante() {
    alert("Estudiante para eliminar");
    // Aquí se debe implementar el llamado a eliminar estudiante en la API
  }

  function editarEstudiante(e) {
    e.preventDefault();
    props.handle();
  }

  return (
    <>
      <tr>
        <td>Juan Gomez</td>
        <td>yosoyeljuan@gmail.com</td>
        <td>98765</td>
        <td>
          <Link className="edit-link" onClick={editarEstudiante}>
            Editar
          </Link>
          &nbsp;
          <Button onClick={borrarEstudiante} size="sm" variant="danger">
            Borrar
          </Button>
        </td>
      </tr>
    </>
  );
};
