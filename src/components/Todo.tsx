import React from 'react'
import { TypeTodo } from '../types/TypeTodo'

type TodoProps = {
  todo: TypeTodo;
  toggleTodo: (id: string) => void;
};


export const Todo = ({ todo, toggleTodo }: TodoProps) => {

    const handleTodoClick = () => {
        toggleTodo(todo.id);
    }

    return (
        <div className={`p-2 rounded-lg flex items-center`}>
          <input type="checkbox" checked={todo.completed} readOnly onChange={handleTodoClick} className="mr-2" />
          <span className={`text-lg`}>{todo.name}</span>
        </div>
      )
}