import React, { useState, useEffect } from "react";
import Toast from "react-bootstrap/Toast";

export const ToastEstudiante = (props) => {
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  });

  return (
    <div>
      {showToast === true && (
        <Toast>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>Hello, world! This is a toast message</Toast.Body>
        </Toast>
      )}
    </div>
  );
};
