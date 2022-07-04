import { memo } from 'react'
interface ChildProps {
  name: string
  age: number
}
// 컴포넌트가 받는 name, age의 변화가 없으면 기존값사용!!!
function Child({name, age}: ChildProps) {
  console.log('자식 컴포넌트가 렌더링이 되었어요')
  return (
    <div style={{ border: '2px solid powderblue', padding: '10px'}}>
      <h3>자녀</h3>
      <p>name: {name}</p>
      <p>age: {age}살</p>
    </div>
  )
}

export default memo(Child)