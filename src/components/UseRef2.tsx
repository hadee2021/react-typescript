import { useRef, useState } from 'react'
function UseRef2() {
  const [renderer, setRenderer] = useState(0)
  const doRendering = () => {
    setRenderer(renderer + 1)
  }

  const countRef = useRef(0)
  let  countVar = 0

  const increaseRef = () => {
    countRef.current = countRef.current + 1
    console.log('ref: ', countRef.current)
  }

  const increaseVar = () => {
    countVar = countVar + 1
    console.log('var: ', countVar)
  }

  return(
    <div>
      <button onClick={doRendering}>렌더링</button>
      <p>Ref: {countRef.current}</p>
      <button onClick={increaseRef}>Ref올려</button>
      <p>Var: {countVar}</p>
      <button onClick={increaseVar}>Var 올려</button>
    </div>
  )
}

export default UseRef2