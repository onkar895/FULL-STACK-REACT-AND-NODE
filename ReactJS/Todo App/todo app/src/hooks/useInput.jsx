import { useState } from "react"
const useInput = () => {

  const [value, setValue] = useState(null)

  const handleTakeInput = (e) => {
    setValue(() => e.target.value)
  }

  return [value, handleTakeInput]
}

export default useInput
