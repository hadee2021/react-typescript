import { memo } from 'react'

interface ChildProps {
  name : string
  tellMe: () => void
}

// 컴포넌트가 받는 name, age의 변화가 없으면 기존값사용!!!
function Child({name, tellMe} : ChildProps) {
  console.log('자식 컴포넌트가 렌더링이 되었어요')
  return (
    <div style={{ border: '2px solid powderblue', padding: '10px'}}>
      <h3>자녀</h3>
      <p>이름: {name}</p>
      <button onClick={tellMe}>텔미</button>
    </div>
  )
}

export default memo(Child)