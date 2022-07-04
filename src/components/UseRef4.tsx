import { useEffect, useRef } from 'react'
function UseRef4() {
  const inputRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    console.log(inputRef)
    if(inputRef.current) {
      inputRef.current.focus()
    }
      
  }, [])

  const login = () => {
    if(inputRef.current) {
      alert(`환영합니다 ${inputRef.current.value}`)
      inputRef.current.value = ''
      inputRef.current.focus()
    }
  }

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="userName" />
      <button onClick={login}>로그인</button>
    </div>
  )
}

export default UseRef4