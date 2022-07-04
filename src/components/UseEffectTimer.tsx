import { useEffect } from 'react'
const UseEffectTimer = () => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('타이머 돌아가는중...')
    }, 1000)

    // unmount될때 사용할 함수이다
    return () => {
      clearInterval(timer)
    }
  }, [])


  return (
    <div>
      <span>타이머를 시작합니다. 콘솔을 보세요!</span>
    </div>
  )
}

export default UseEffectTimer

