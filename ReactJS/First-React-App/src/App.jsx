import { useState } from 'react'
import './App.css'
import Person from './Components/Person';

function App() {

  const persons = [
    {
      name: 'Max',
      age: 21
    },
    {
      name: 'John',
      age: 22
    },
    {
      name: 'Anad',
      age: 23
    },
    {
      name: 'Amey',
      age: 24
    },
    {
      name: 'Manish',
      age: 25
    },
    {
      name: 'Onkar',
      age: 26
    },
  ]

  const randomNumber = () => {
    return Math.ceil(Math.random() * 6);
  }

  const [count, setCount] = useState(randomNumber())

  const ClickOnButton = () => {
    const newRandomNum = randomNumber()
    setCount(newRandomNum)
    console.log(count)
  }

  return (
    <>
      <div>
        <h1>HII! THERE</h1>
        <p>  Your dice roll: {count}.</p>
        <button onClick={ClickOnButton}>
          Click to get a new number
        </button>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', }}>
        {
          persons.map((person, index) => {
            return <Person key={index} name={person.name} age={person.age} />
          })
        }
      </div>
    </>
  )
}

export default App
