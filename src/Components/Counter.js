import React from 'react'
import Button from './Button'

const Counter = props => (
    <main>
       
       <Button behavior={props.decrement} 
            textContent={"Decrement"}/>
        {props.count}
        <Button behavior={props.increment} 
            textContent={"Increment"}/>
      </main>
)

export default Counter