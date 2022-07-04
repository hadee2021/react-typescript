import { useState, useRef } from 'react'

function UseRef() {
  const [count, setCount] = useState(0)
  const increaseCountState = () => {
    setCount(count + 1)
  }

  const countRef = useRef<number>(0)
  const increaseCountRef = () => {
    countRef.current = countRef.current + 1
    console.log('Ref', countRef.current)
  }

  return (
    <div>
      <p>State: {count}</p>
      <button onClick={increaseCountState}>State 올려</button>
      <p>Ref: {countRef.current}</p>
      <button onClick={increaseCountRef}>Ref 올려</button>
    </div>
  )
}

export default UseRef