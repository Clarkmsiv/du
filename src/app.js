import React, { useState } from "react";
import TileView from "./components/TileView"; 
import ModalForm from "./components/ModalForm"; 
import FilterControls from "./components/FilterControls"; 
import DeleteConfirmation from "./components/DeleteConfirmation"; 

const App = () => {
  const [lists, setLists] = useState([
    { id: 1, title: "seznam 1", archived: false },
    { id: 2, title: "seznam 2", archived: true },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [selectedList, setSelectedList] = useState(null);
  const [filter, setFilter] = useState("all");


  const addList = (title) => {
    setLists([...lists, { id: lists.length + 1, title, archived: false }]);
    setIsModalOpen(false);
  };

 
  const deleteList = (id) => {
    setLists(lists.filter((list) => list.id !== id));
    setIsDeleteOpen(false);
  };

  
  const toggleArchive = (list) => {
    setLists(
      lists.map((item) =>
        item.id === list.id ? { ...item, archived: !item.archived } : item
      )
    );
  };

  const filteredLists = lists.filter((list) => {
    if (filter === "archived") return list.archived;
    if (filter === "unarchived") return !list.archived;
    return true;
  });

  return (
    <div>
      <h1>Nákupní seznam Aplikace</h1>
      <FilterControls filter={filter} setFilter={setFilter} />
      <button onClick={() => setIsModalOpen(true)}>Přidat nový seznam</button>
      <TileView
        lists={filteredLists}
        onDelete={(list) => {
          setSelectedList(list);
          setIsDeleteOpen(true);
        }}
        onToggleArchive={toggleArchive}  
      />
      {isModalOpen && <ModalForm onSubmit={addList} onClose={() => setIsModalOpen(false)} />}
      {isDeleteOpen && (
        <DeleteConfirmation
          list={selectedList}
          onConfirm={() => deleteList(selectedList.id)}
          onClose={() => setIsDeleteOpen(false)}
        />
      )}
    </div>
  );
};

export default App;
