import TodoApp from "./Components/TodoApp/TodoApp"
import useToggle from "./hooks/useToggle"


function App() {

  // const [isDark, setIsDark] = useState(false)   // Normal state using useState

  const [isDark, setIsDark] = useToggle(false)  // Custom Hook

  // const changeThemeHandler = () => {
  //   setIsDark(() => !isDark)
  // }

  return (
    <>
      <div className={`${isDark ? 'dark' : 'light'}`}>
        <div style={{ textAlign: 'center', margin: '30px 0', color: '#0066B2', }}> <h1>Todo App</h1>
          <button style={{ color: '#0066B2', padding: '8px 20px', fontWeight: 'bold', margin: '20px 0 5px 0' }} onClick={() => setIsDark()}>Change Theme</button>
        </div>
        <TodoApp />
      </div>
    </>
  )
}

export default App
