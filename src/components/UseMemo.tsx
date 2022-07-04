import { useMemo } from "react"
import { useState } from "react"

const hardCalculate = (number: number) => {
  console.log('어려운 계산')
  for(let i = 0; i < 99; i++) { } //생각하는시간
  return number + 10000
}

const easyCalculate = (number: number) => {
  console.log('쉬운 계산')
  return number + 1
}

function UseMemo() {
  const [hardNumber, setHardNumber] = useState(1)
  const [easyNumber, setEasyNumber] = useState(1)
  
  //const hardSum = hardCalculate(hardNumber)
  const hardSum =  useMemo(() => {
    return hardCalculate(hardNumber)
  }, [hardNumber])
  
  const easydSum = easyCalculate(easyNumber)


  return (
    <div>
      <h3>어려운 계산기</h3>
      <input 
        type='number'
        value={hardNumber}
        onChange={(e) => setHardNumber(parseInt(e.target.value))}
      />
      <span> + 10000 = {hardSum}</span>

      <h3>쉬운 계산기</h3>
      <input 
        type='number'
        value={easyNumber}
        onChange={(e) => setEasyNumber(parseInt(e.target.value))}
      />
      <span> + 1 = {easydSum}</span>
    </div>
  )
}

export default UseMemo