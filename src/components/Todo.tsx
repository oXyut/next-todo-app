import React from 'react'
import { TypeTodo } from '../types/TypeTodo'


function Todo({ todo, toggleTodo }: { todo: TypeTodo, toggleTodo: (id: string) => void }) {

    const handleTodoClick = () => {
        toggleTodo(todo.id);
    }

    return (
    <div>
        <label>
        {/* checkedにはboolianが入る */}
            <input type="checkbox"  checked={todo.completed} readOnly onChange={handleTodoClick}/>
        </label>
        {todo.name}
    </div>
    )
}

export default Todo