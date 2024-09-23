import styles from "./TodoItem.module.css";

export const TodoItem = ({ todoName, todoDate, onDeleteClick}) => {

  //this is declared inside the component to pass the data into UI
  

  return(
    <div className="container justify-content-end">
      <div className={`${styles['kg-row']} row align-items-end justify-content-center mt-2`}>
    <div className="col-3 flex">{todoName}</div>
    <div className="col-2">{todoDate}</div>
    <div className="col-2">
          <button type="button" className={`${styles['kg-button','marginnew']} btn btn-danger`} onClick={() =>onDeleteClick(todoName)}>Delete</button>
    </div>
  </div>
  </div>
  );
}