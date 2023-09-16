import { useEffect, useState } from "react";
import "./App.css";
import ToDoItem from "./ToDoItem";

function App() {
  let [todolist, settodolist] = useState([0]);

  useEffect(() => {
    console.log(todolist);
  });

  let handleAddItemClick = () => {
    let temparr = [];
    if (todolist.length === 0) {
      console.log("List is empty");
      temparr = [1];
    } else temparr = [...todolist, todolist[todolist.length - 1] + 1];

    console.log(todolist[0]);

    console.log("Item added");
    settodolist(temparr);
  };

  let handleDoneItemClick = (index) => {
    let temparr = [...todolist];
    temparr.splice(index, 1);
    settodolist(temparr);

    console.log("Item removed");
  };

  return (
    <div className="App">
      <div>
        <button className="AddItembtn" onClick={handleAddItemClick}>
          <h3>Add Item</h3>
        </button>
        {todolist.map((item, index) => (
          <ToDoItem
            ToDoText={item}
            key={index}
            handleDoneItemClick={handleDoneItemClick}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
