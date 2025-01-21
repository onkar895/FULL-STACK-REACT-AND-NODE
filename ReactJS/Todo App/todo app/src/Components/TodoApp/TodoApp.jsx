import { useState, useEffect } from "react"
import Form from "../Form"
import { v4 as uuid } from 'uuid'
import TodoList from "./TodoList"

const TodoApp = () => {

  // const initialTodos = [
  //   {
  //     id: uuid(),
  //     name: "Omkar karale",
  //     email: "example1@gmail.com",
  //     password: '12345',
  //     completed: false,
  //   },
  //   {
  //     id: uuid(),
  //     name: "Kadambari Karale",
  //     email: "example2@gmail.com",
  //     password: '123456',
  //     completed: false,
  //   },
  //   {
  //     id: uuid(),
  //     name: "Rishi Karale",
  //     email: "example3@gmail.com",
  //     password: '1234567',
  //     completed: false,
  //   }
  // ]

  // const initialTodos = JSON.parse(window.localStorage.getItem('todos') || '[]')
  const [todos, setTodos] = useState([])
  const [count, setCount] = useState(0);

  // Add todo function
  const addTodo = ((name, email, password) => {
    setTodos((prevState) => [...prevState, { id: uuid(), name: name, email: email, password: password, completed: true }])
    // console.log(todos)
  })

  const toggleMarkCompleted = (id) => {
    setTodos((prevState) => prevState.map((todo) => {
      return todo.id === id ? {...todo, completed: !todo.completed } : todo
    }));
  }

  // Delete todo function
  const deleteTodo = (id) => {
    setTodos((prevState) => prevState.filter((todo) => todo.id !== id))
  }

  // This will be executed for each re-render 
  useEffect(() => {
    console.log('1. Without dependency array');
  })

  // This will be executed after the first render
  useEffect(() => {
    console.log('2. empty dependency array');
  }, [])


  // when todos changes
  useEffect(() => {
    console.log('3. todos as dependency');
    window.localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])

  // when count changes
  useEffect(() => {
    console.log('4. count as dependency');
  }, [count])


  //when count or todos changes
  useEffect(() => {
    console.log('5. count or todos as dependency');
  }, [count, todos])


  const mainStyle = { display: 'block', margin: 'auto', width: '600px', boxShadow: ' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', padding: '20px' }

  const h1Style = { display: 'block', margin: 'auto', textAlign: 'center', marginTop: '50px', cursor: 'pointer', backgroundColor: '#0066B2', color: 'white', width: '500px', padding: '10px' }

  return (
    <>
      <div style={mainStyle}>
        <Form addTodo={addTodo} />
        <TodoList todos={todos} toggleMarkCompleted={toggleMarkCompleted} deleteTodo={deleteTodo} />
      </div>
      <h1 style={h1Style} onClick={() => setCount(count + 1)}>Hooks Demo: {count}</h1>
    </>
  )
}

export default TodoApp
