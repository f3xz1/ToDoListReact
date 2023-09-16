function ToDoItem({ ToDoText, handleDoneItemClick }) {
  return (
    <div className="TodoConteiner">
      <div className="ToDoItem">
        <label>{ToDoText}</label>
        <button className="ToDoRemoveBtn" onClick={() => handleDoneItemClick()}>
          Done
        </button>
      </div>
    </div>
  );
}

export default ToDoItem;
