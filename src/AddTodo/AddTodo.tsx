import { useState, FC, FormEvent } from "react"

interface IAddTodoProps {
    onAdd: (text: string) => void;
}

const AddTodo: FC<IAddTodoProps> =({ onAdd }) =>{
    const [newTodo, setNewTodo] = useState<string>('')

     const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        onAdd(newTodo);
        setNewTodo('');
    }

    return (<form onSubmit={handleSubmit}>
        <input type='text' placeholder="New todo" value={newTodo} onChange={(e)=>setNewTodo(e.target.value)}/>
        <button type="submit">Add</button>
    </form>
    )
}

export default AddTodo;