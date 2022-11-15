import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import { FilaEstudiante } from "./FilaEstudiante.jsx";
import { EditarEstudiante } from "./EditarEstudiante.jsx";

export const ListarEstudiantes = () => {
  const [showModal, setShowModal] = useState(false);

  function dataTable() {
    return <FilaEstudiante handle={handleOpen}></FilaEstudiante>;
  }

  function handleOpen() {
    setShowModal(true);
  }

  function handleClose() {
    setShowModal(false);
  }

  return (
    <div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Cedula</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>{dataTable()}</tbody>
      </Table>
      {showModal && <EditarEstudiante handleC={handleClose} />}
    </div>
  );
};
