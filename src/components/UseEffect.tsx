import React, { useState ,useEffect } from 'react'
function UseEffect() {
  const [count, setCount] = useState(1)
  const [name, setName] = useState('')
  const handleCount = () => {
    setCount(count + 1)
  }
  const handleInput =(e:React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  // 렌더링 될때마다 매번실행됨
  // useEffect(() => { })

  // 최초1회만 실행
  //useEffect(() => { }, [])

  // 최초1회, count가 변할때만 실행됨
    useEffect(() => {

    }, [count])
    
  return (
    <div>
      <button onClick={handleCount}>Update</button>
      <span>count: {count}</span> <br/>
      <input type="text" value={name} onChange={handleInput} />
      <span>name: {name}</span>
    </div>
  )
}

export default UseEffect