import React from 'react'
import Todo from "./Todo"
import { TypeTodo } from '../types/TypeTodo'



const TodoList = ({ todos, toggleTodo }: { todos: TypeTodo[], toggleTodo: (id: string) => void }) => {
    return todos.map((todo) => <Todo todo={todo} key={todo.id} toggleTodo={toggleTodo}/>);
}

export default TodoList