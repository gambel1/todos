import AddTodo from "../AddTodo/AddTodo";
import  TodoItem  from "../TodoItem/TodoItem";
import { useState } from "react";

export interface Task {
  id: number,
  text: string
}

export default function App() {
  const [todos, setTodos] = useState<Task[]>([])
  
  const addTodos = (text: string) => {
    const newTodo = { id: Date.now(), text };
    setTodos([...todos, newTodo])
  }

  const deleteTodo = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos)
  }

  return (
    <section className="container">
      <div className="app">
      <h1>Todo list</h1>
      <AddTodo onAdd={addTodos} />
      <ul className="appList">
        {todos.map((todo) => (<TodoItem key={todo.id} todo={ todo} onDelete={deleteTodo} />))}
      </ul>
      </div>
    </section>

  );
}


