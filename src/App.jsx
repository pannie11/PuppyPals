import {puppyList} from './data.js'
import './App.css'
import { useState } from 'react'

function App() {
const [puppies, setPuppies] = useState(puppyList)
console.log(puppies)
  return (
    <>
      <div className='App'>
       {puppies.map(puppy => <p key={puppy.id}>{puppy.name}</p>)}
      </div>
  
    </>
  )
}

export default App
