import React, { useState } from 'react'
function UseState() {


  const [time, setTime] = useState(1)

  const handleClick = () => {
    setTime(time + 1) // 다음에 바뀔내용을 담는것이다
  }


  ///////////////////////

  const [names, setName] = useState(() => {
    return ['홍길동', '김민수'] // 처음랜더링때 1번만 
  })
  const [input, setInput] = useState('')

  const handleInput = (e:React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }
  const handleUpload = () => {
    setName([...names, input])
    // setName((prevState) => {
    //   return [input, ...prevState]
    // })
    setInput('')
  }
  return (
    <div>
      <span>현재시각: {time}시</span>
      <button onClick={handleClick}>Update</button>
      <hr/>

      <input  type="text" value={input} onChange={handleInput} />
      <button onClick={handleUpload}>Upload</button>
      {names.map((name, index) => {
        return <p key={index}>{name}</p>
      })}

    </div>
  )
}

export default UseState