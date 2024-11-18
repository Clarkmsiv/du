import React from "react";

const DeleteConfirmation = ({ list, onConfirm, onClose }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: "20%",
        left: "30%",
        padding: "20px",
        backgroundColor: "#fff",
        border: "1px solid #ccc",
        borderRadius: "5px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", 
        zIndex: 1000, 
        width: "300px", 
      }}
    >
      <h3>{list.title} chcete odstranit seznam s názvem?</h3>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button
          onClick={onConfirm}
          style={{
            padding: "8px 16px",
            backgroundColor: "#d9534f", 
            color: "white",
            border: "none",
            borderRadius: "3px",
            cursor: "pointer",
          }}
        >
          Ano
        </button>
        <button
          onClick={onClose}
          style={{
            padding: "8px 16px",
            backgroundColor: "#5bc0de", 
            color: "white",
            border: "none",
            borderRadius: "3px",
            cursor: "pointer",
          }}
        >
          ne
        </button>
      </div>
    </div>
  );
};

export default DeleteConfirmation;
