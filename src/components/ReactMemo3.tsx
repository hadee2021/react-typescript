import { useCallback } from 'react'
import { useState } from 'react'
import Child3 from './Child3'

function ReactMemo() {
  const [parentAge, setParentAge] = useState(0)
  
  const incrementParentAge = () => {
    setParentAge(parentAge + 1)
  }

  console.log('부모 컴포넌트가 렌더링이 되었어요')

  const tellMe = useCallback(() => {
    console.log('텔미')
  }, [])

  return (
    <div style={{ border: '2px solid navy', padding: '10px'}}>
      <h1>부모</h1>
      <p>age: {parentAge}</p>
      <button onClick={incrementParentAge}>부모 나이 증가</button>
      <Child3 name={'홍길동'} tellMe={tellMe} />
    </div>
  )
}

export default ReactMemo