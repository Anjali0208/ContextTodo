import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoProvider } from './contexts/TodoContext'
import { json } from 'react-router-dom'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev])
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id != id))
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id == id ? todo : prevTodo))
  }

  const toggleCompleted = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id == id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])


  useEffect(() => {
    JSON.parse(localStorage.setItem("todos", JSON.stringify(todos)))
  }, [todos])
  return (

    <TodoProvider value={{ todos, addTodo, deleteTodo, updateTodo, toggleCompleted }}>
      <div>
        <h1>Todo List</h1>
      </div>
    </TodoProvider>
  )
}

export default App
