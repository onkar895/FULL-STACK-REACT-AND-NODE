/* eslint-disable react/prop-types */
import { useRef } from "react"


const Form = ({ addTodo }) => {

  // Here, useRef is used to create a reference to the <input> elements.
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  // This initializes a ref object. Initially, todoTextInputRef.current is null.
  // So we have to attach the ref to the input field.
  // By attaching the ref to the <input> element, todoTextInputRef.current now points to the DOM element. It allows direct access to the <input>.

  const formSubmitHandler = (e) => {
    e.preventDefault()
    const nameText = nameInputRef.current.value
    const emailText = emailInputRef.current.value
    const passwordText = passwordInputRef.current.value

    if (nameText.trim().length === 0 || emailText.trim().length === 0 || passwordText.trim().length === 0) {
      return
    }

    addTodo(nameText, emailText, passwordText)

    // Clear the input fields
    nameInputRef.current.value = ''
    emailInputRef.current.value = ''
    passwordInputRef.current.value = ''
  }

  const formStyle = {
    display: "block",
    margin: 'auto',
    width: '550px',
    height: 'auto',
    backgroundColor: 'white'
  }

  const inputStyle = {
    padding: '10px',
    width: '80%',
    fontWeight: 'bold'
  }

  const btnStyle = {
    padding: '12px',
    borderRadius: '5px',
    backgroundColor: '#0066B2',
    color: 'white',
    textAlign: 'center',
    width: '80%',
    border: 'none',
    fontWeight: 'bold',
    cursor: 'pointer'
  }

  return (
    <form onClick={formSubmitHandler} style={formStyle}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '25px' }}>
        <h2 style={{ color: '#0066B2' }}>Basic Form</h2>
        {/* attaching the ref to the <input> element */}
        <input ref={nameInputRef}
          type="text"
          placeholder="Full Name"
          id="todo-text"
          style={inputStyle} />
        {/* attaching the ref to the <input> element */}
        <input ref={emailInputRef}
          type="email"
          placeholder="Email ID"
          id="todo-text1"
          style={inputStyle} />
        {/* attaching the ref to the <input> element */}
        <input ref={passwordInputRef}
          type="password"
          placeholder="Password"
          id="todo-text2"
          style={inputStyle} />
        <button style={btnStyle}>
          ADD
        </button>
      </div>
    </form>
  )
}

export default Form
