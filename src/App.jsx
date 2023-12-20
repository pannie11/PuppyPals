import {puppyList} from './data.js'
import './App.css'
import { useState } from 'react'

function App() {
const [puppies, setPuppies] = useState(puppyList)
console.log(puppies)

const [featPupId, setFeatPupId] = useState(null)

const featuredPup = puppies.find(pup => pup.id === featPupId)
console.log(featuredPup)
  return (
    <>
      <div className='App'>
       {puppies.map(puppy => <p onClick={() => {setFeatPupId(puppy.id)}} key={puppy.id}>{puppy.name}</p>)}
       {featPupId && 
       <div>
        <h2>{featuredPup.name}</h2>
        <ul>
          <li>Age: {featuredPup.age}</li>
          <li>Email: {featuredPup.email}</li>
        </ul>
        </div>}
      </div>
  
    </>
  )
}

export default App
