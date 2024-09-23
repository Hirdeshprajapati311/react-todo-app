import { useState } from "react";
import styles from "./AddTodo.module.css";

export const AddTodo = ({ onNewItem }) => {
  

  const [todoName, setTodoName] = useState();
  const [dueDate, setDueDate] = useState();

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };


  const handleAddButtonClicked = () => {
    onNewItem(todoName, dueDate);
    setDueDate();
    setTodoName();
  }

  return(
    <div className="container">
  <div className="row kg-row align-items-center justify-content-center mt-3">
        <div className="col-3 flex">
    <input className ={styles.inputwidth} onChange={handleNameChange} type="text" placeholder="Enter Todo Here" value={todoName} />
    </div>
    <div className="col-2 ">
    <input className={styles.inputwidth}  type="date" value={dueDate} onChange={handleDateChange}/>
    </div>
    <div className="col-2 ">
    <button type="button" className="btn btn-success kg-button" onClick={ handleAddButtonClicked}>Add</button>
    </div>
  </div>
  </div>
  );
}