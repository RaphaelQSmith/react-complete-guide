import React from 'react'
import './UserInput.css'

const userInput = (props) => {
 
     return (
      <div>
        <input className='Input' type='text' onChange={props.changed} value={props.text} />
      </div>
    )
  }
 

export default userInput;