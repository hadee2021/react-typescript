import { useCallback } from "react"
import { useEffect } from "react"
import { useState } from "react"

function UseCallback() {
  const [number, setNumber] = useState(0)
  const [toggle, setToggle] = useState(true)

  // 의존성배열이 []이면 number가 변해도 아무반응없다
  // 의존성배열이 [number]이면 number가 변하면 콜벡함수를 실행한다
  const someFunction = useCallback(() => {
    console.log(`someFunc: number: ${number}`)
    
  }, [number])

  useEffect(() => {
    console.log('someFunction이 새롭게 만들어졌어요')
  }, [someFunction]) // 1번의 경우 함수는 리렌더링시 새롭게 만들어진다

  return(
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <button onClick={() => setToggle(!toggle)}>{toggle.toString()}</button>
      <br />
      <button onClick={someFunction}>Call someFunc</button>
    </div>
  )
}

export default UseCallback