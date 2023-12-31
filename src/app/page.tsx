"use client";
import '../app/globals.css'
import { useState, useRef, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { TypeTodo } from '../types/TypeTodo'
import { TypeUUID } from '../types/TypeUUID'
import { Button, TodoList } from '../components'



export default function Home() {
  const [todos, setTodos] = useState<TypeTodo[]>([]);
  const todoNameRef = useRef<HTMLInputElement>(null);

  const handleAddTodo = () => {
    if (todoNameRef.current === null) return;
    const name = todoNameRef.current.value;
    if (name === '') return; // don't add empty todo
    setTodos((prevTodos: TypeTodo[]) => {
      return [...prevTodos, {id: uuidv4(), name: name, completed: false}]
    });
    if (todoNameRef.current !== null) {
      todoNameRef.current.value = '';
    }
  }

  const toggleTodo = (id: TypeUUID) => {
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

  // debug
  useEffect(() => {
    console.log(todos);
  }, [todos]);


  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4">Todo List</h1>
      <div className="flex justify-center items-center mb-4">
        <input type="text" ref={todoNameRef} className="border border-gray-300 p-2 rounded mr-2 text-gray-800 text-dark" />
        <Button onClick={handleAddTodo}>Add Todo </Button>
      </div>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <div className="text-center mt-4">
        <Button onClick={handleClearTodos} variant="danger">
          Clear Completed Todos
        </Button>
      </div>
      <div className="text-center mt-4 text-lg">
        {todos.filter((todo) => !todo.completed).length} left to do
      </div>
    </div>
  );
}

