/* eslint-disable react/prop-types */
import { useState } from "react";
import image from '../assets/image.jpeg'
const Person = (props) => {

  // Destructing properties
  const { name, age } = props

  const [pesName, setName] = useState(name)

  const profileClickHandler = () => {
    setName('State changed');
  }

  return (
    <figure onClick={profileClickHandler} style={{ width: '300px', border: '2px solid gray', padding: '1rem' }}>
      <img style={{ width: 'inherit' }} src={image} />
      <figcaption>
        <h3>Name: {pesName}</h3>
        <h3>Age: {age}</h3>
        <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h5>
      </figcaption>
    </figure>
  )
}

export default Person
