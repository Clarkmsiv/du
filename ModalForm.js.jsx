import React, { useState } from "react";

const ModalForm = ({ closeModal }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Yeni Liste:", title);
    closeModal();
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="List Name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <button onClick={closeModal}>Close</button>
    </div>
  );
};

export default ModalForm;