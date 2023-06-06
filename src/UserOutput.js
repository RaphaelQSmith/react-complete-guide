import React from 'react'

const userOutput = (props) => {
    return (
      <div>
        <p>Your user name is {props.text}</p>
        <p>Welcome, {props.text}</p>
      </div>
    )
  }

export default userOutput;