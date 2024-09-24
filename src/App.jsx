import { useEffect, useState } from 'react'

import './App.css'
import { TodoProvider } from './contexts/TodoContext'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'
import Footer from './components/Footer'



function App() {
  const [todos, setTodos] = useState([])

  // add functionality
  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev])

  }
  // delete functionality
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id != id))
  }

  // update functionality
  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id == id ? todo : prevTodo))
  }

  // todo completed or not functionality
  const toggleCompleted = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id == id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo))
  }

  // get items from the local storage
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  // set items from the local storage
  useEffect(() => {
    (localStorage.setItem("todos", JSON.stringify(todos)))
  }, [todos])

  const completedTask = todos.filter((todo) => todo.completed).length
  const totalTask = todos.length

  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleCompleted }}>
      <div className="bg-[#021526] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2 text-[#6EACDA]">Write down you daily routine</h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (
              <div key={todo.id}
                className='w-full'
              >
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
        <Footer completedTask={completedTask} totalTask={totalTask} />
      </div>
    </TodoProvider>
  )
}

export default App
