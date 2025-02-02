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

  const randomNumber = Math.floor(Math.random() * 10) + 1;

  const [count, setCount] = useState(randomNumber)

  const ClickOnButton = () => {
    setCount(randomNumber)
  }

  return (
    <>
      <div className='flex flex-col space-y-20'>
        <div>
          <h1>HII! THERE</h1>
          <p>  Your dice roll: {count}.</p>
          <button onClick={ClickOnButton}>
            Click to get a new number
          </button>
          {
            count < 5
              ? <h4>Number is less than 5</h4>
              : <h4>Number is greater than/equal to 5</h4>
          }
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', }}>
          {
            persons.map((person, index) => {
              return <Person key={index} name={person.name} age={person.age} />
            })
          }
        </div>
      </div>
    </>
  )
}

export default App
