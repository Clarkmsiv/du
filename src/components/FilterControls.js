import React from "react";

const FilterControls = ({ filter, setFilter }) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <button
        onClick={() => setFilter("all")}
        disabled={filter === "all"}
        style={{
          padding: "10px 20px",
          marginRight: "10px",
          backgroundColor: filter === "all" ? "#007bff" : "#f0f0f0",
          color: filter === "all" ? "#fff" : "#333",
          border: "1px solid #ccc",
          borderRadius: "5px",
          cursor: filter === "all" ? "not-allowed" : "pointer",
          transition: "background-color 0.3s",
        }}
      >
        zobrazit vše
      </button>
      <button
        onClick={() => setFilter("unarchived")}
        disabled={filter === "unarchived"}
        style={{
          padding: "10px 20px",
          marginRight: "10px",
          backgroundColor: filter === "unarchived" ? "#28a745" : "#f0f0f0",
          color: filter === "unarchived" ? "#fff" : "#333",
          border: "1px solid #ccc",
          borderRadius: "5px",
          cursor: filter === "unarchived" ? "not-allowed" : "pointer",
          transition: "background-color 0.3s",
        }}
      >
        Nearchivováno
      </button>
      <button
        onClick={() => setFilter("archived")}
        disabled={filter === "archived"}
        style={{
          padding: "10px 20px",
          backgroundColor: filter === "archived" ? "#dc3545" : "#f0f0f0",
          color: filter === "archived" ? "#fff" : "#333",
          border: "1px solid #ccc",
          borderRadius: "5px",
          cursor: filter === "archived" ? "not-allowed" : "pointer",
          transition: "background-color 0.3s",
        }}
      >
        archivováno
      </button>
    </div>
  );
};

export default FilterControls;
