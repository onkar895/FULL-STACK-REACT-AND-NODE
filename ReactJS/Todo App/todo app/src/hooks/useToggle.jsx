// What are Custom Hooks ?
// Custom hooks are a way to reuse stateful logic in React.
// Instead of repeating the same code in multiple components, you can extract the logic into a custom hook, making your code more modular and readable.


import { useState } from "react"

// Defines a custom hook named useToggle. It accepts a parameter initialVal which defaults to false if no value is provided. 
// A custom hook is a reusable function that follows React’s rules of hooks and allows you to encapsulate stateful logic.
const useToggle = (initialVal = false) => {

  const [value, setValue] = useState(initialVal)

  const toggleValue = () => {
    setValue(() => !value)
  }

  return [value, toggleValue]
  // Returns an array containing the current state value and the function toggleValue. This allows components using the hook to access and manipulate the state.
}

export default useToggle

