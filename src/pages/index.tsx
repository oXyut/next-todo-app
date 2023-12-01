import '../app/globals.css'
import { useState, useRef } from 'react'
import { TypeTodo } from '../types/TypeTodo'
import TodoList from '../components/TodoList'
import { v4 as uuidv4 } from 'uuid';



export default function Home() {
  const [todos, setTodos] = useState<TypeTodo[]>([]);
  const todoNameRef = useRef<HTMLInputElement|null>(null);

  const handleAddTodo = () => {
    console.log(todoNameRef);
    if (todoNameRef.current === null) return;
    const name = todoNameRef.current.value;
    setTodos((prevTodos: TypeTodo[]) => {
      return [...prevTodos, {id: uuidv4(), name: name, completed: false}]
    });
    if (todoNameRef.current !== null) {
      todoNameRef.current.value = '';
    }
  }

  const toggleTodo = (id: string) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    if (todo === undefined) return;
    todo.completed = !todo.completed;
    setTodos(newTodos);
  }

  const handleClearTodos = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  }


  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4">Todo List</h1>
      <div className="flex justify-center items-center mb-4">
        <input type="text" ref={todoNameRef} className="border border-gray-300 p-2 rounded mr-2 text-gray-800 text-dark" />
        <button onClick={handleAddTodo} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add Todo
        </button>
      </div>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <div className="text-center mt-4">
        <button onClick={handleClearTodos} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Clear Completed Todos
        </button>
      </div>
      <div className="text-center mt-4">
        {todos.filter((todo) => !todo.completed).length} left to do
      </div>     
    </div>
  );
}

