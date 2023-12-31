import React from 'react'
import { Todo } from "./Todo"
import { TypeTodo } from '../types/TypeTodo'
import { TypeUUID } from '../types/TypeUUID'



export const TodoList = ({ todos, toggleTodo }: { todos: TypeTodo[], toggleTodo: (id: TypeUUID) => void }) => {
    return (
      <div className="w-full flex flex-col items-center">
        {todos.map((todo) => (
          <div key={todo.id} className="w-full max-w-sm">
            <Todo todo={todo} key={todo.id} toggleTodo={toggleTodo} />
          </div>
        ))}
      </div>
    );
  }