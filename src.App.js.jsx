import React, { useState } from "react";
import HomePage from "./components/HomePage";
import ListDetailsPage from "./components/ListDetailsPage";
import ModalForm from "./components/ModalForm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Router>
      <div>
        {modalOpen && <ModalForm closeModal={() => setModalOpen(false)} />}
        <Routes>
          <Route
            path="/"
            element={<HomePage openModal={() => setModalOpen(true)} />}
          />
          <Route path="/details" element={<ListDetailsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
