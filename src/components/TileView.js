import React from "react";

const TileView = ({ lists, onDelete, onToggleArchive }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        gap: "15px",
        padding: "20px",
      }}
    >
      {lists.map((list) => (
        <div
          key={list.id}
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            borderRadius: "8px",
            backgroundColor: list.archived ? "#f0f0f0" : "#e0ffe0",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
        >
          <h3>{list.title}</h3>
          <button
            onClick={() => onDelete(list)}
            style={{
              padding: "8px 15px",
              backgroundColor: "#dc3545",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              transition: "background-color 0.3s, transform 0.2s",
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = "#c82333"}
            onMouseOut={(e) => e.target.style.backgroundColor = "#dc3545"}
          >
            Smazat
          </button>
          <button
            onClick={() => onToggleArchive(list)}
            style={{
              padding: "8px 15px",
              backgroundColor: list.archived ? "#17a2b8" : "#28a745",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              transition: "background-color 0.3s, transform 0.2s",
              marginTop: "10px",
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = list.archived ? "#138496" : "#218838"}
            onMouseOut={(e) => e.target.style.backgroundColor = list.archived ? "#17a2b8" : "#28a745"}
          >
            {list.archived ? "Odebrat z archivu" : "archiv"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default TileView;
