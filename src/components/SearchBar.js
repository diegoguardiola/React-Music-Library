import React, {useContext} from 'react'
import { SearchContext } from '../context/SearchContext'


export default function SearchBar() {
let {input, handleInput} = useContext(SearchContext)
// Destructured it to put it as props


  return (
    <form>
        <input ref={input} type='text' placeholder='Search Term here' 
        />
        {/* onChange={(e)=>{setInput(e.target.value)}} is not used because useContext provides the reference to handleSearch */}
        <button onClick={(e)=>handleInput(e, input.current.value)}>Submit Button</button>
    </form>
  )
}