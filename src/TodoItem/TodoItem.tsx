import { Task } from "../App/App"
import { FC } from "react"

interface ITodoItemProps {
    todo: Task;
    onDelete: (id: number) => void;
}

const TodoItem: FC <ITodoItemProps>=({ todo, onDelete })=> {
    return (
    <li>
        <p>{ todo.text}</p>
        <button onClick={()=>onDelete(todo.id)} type="button">Delete</button>
    </li>
   
            )
}

export default TodoItem;