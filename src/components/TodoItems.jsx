import { TodoItem } from "./TodoItem";
import styles from "../components/TodoItems.module.css";

const TodoItems = ({todoItems, onDeleteClick}) => {
  return (
    <div className={`${styles['items-container']}`}>
      {todoItems.map(item => (<TodoItem
       key={item.id} todoName={item.name} todoDate={item.dueDate} onDeleteClick={onDeleteClick} />))}
    </div>
  )
}

export default TodoItems;