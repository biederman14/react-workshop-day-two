import React from 'react'

const Counter = props => (
    <main>
        <button onClick={props.decrement}>
          Decrement
        </button>
        {props.count}
        <button onClick={props.increment}>
          Increment
        </button>
      </main>
)

export default Counter