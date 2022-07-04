import { useCallback } from "react"
import { useState } from "react"
import Box from './Box'


function UseCallback2() {
  const [size, setSize] = useState(100)
  const [isDark, setIsDark] = useState(false)
  
  // size의 변화가 있을때만 콜벡을 실행하여
  // createBoxStyle를 초기화 시켜준다
  const createBoxStyle = useCallback(() => {
    return {
      backgroundColor: 'pink',
      width: `${size}px`,
      height: `${size}px`
    }
  }, [size])

  return (
    <div
      style={{
        background: isDark ? 'black' : 'white',
      }}
    >
      <input 
        type="number"
        value={size}
        onChange={(e) => setSize(Number(e.target.value))}
      />
      <button onClick={() => setIsDark(!isDark)}>Change Theme</button>
      <Box createBoxStyle={createBoxStyle} />
    </div>
  )
}

export default UseCallback2