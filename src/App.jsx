import { AddTodo } from "./components/AddTodo";
import { AppName } from "./components/AppName";
import "./App.css";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {


  const initialTodoItems = [
    {
      id: 1,
      name: 'Buy Milk',
      dueDate: '4/02/2023',
    },
    {
      id: 2,
      name: 'Do Cycling',
      dueDate: '09/11/2024',
    },
    {
      id: 3,
      name: 'Do Gym',
      dueDate: 'today',
    },
  ];

  const [todoItems, setTodoItems] = useState(initialTodoItems);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New Item Added: ${itemName} Date: ${itemDueDate}`);
    const newTodoItems = [...todoItems, {
      name: itemName,
      dueDate: itemDueDate
    }];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter(item => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

return(
<center className="todo-container">
<AppName/>
    <AddTodo onNewItem = {handleNewItem} />
    {todoItems.length  === 0 && <WelcomeMessage todoItems={todoItems} />}
    <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem}/>
</center>
);
}

export default App;