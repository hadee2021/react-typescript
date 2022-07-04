import { useState, useReducer } from "react"
// reducer - state를 업데이트 하는 역할 (은행)
// dispatch - state 업데이트를 위한 요구
// action - 요구의 내용

const ACTION_TYPES = {
  deposit: 'deposit',
  withdraw: 'withdraw',
}

interface Action {
  type: string
  payload: number
}

const reducer = (state: number, action: Action) => {
  console.log('reducer 호출', state, action)
  switch(action.type) {
    case ACTION_TYPES.deposit:
      return state + action.payload // 반환값으로 state를 업데이트
    case ACTION_TYPES.withdraw:
      return state - action.payload
    default:
      return state
  }
}

function Usereducer() {
  const [number, setNumber] = useState(0)
  const[money, dispatch] = useReducer(reducer, 0)

  return (
    <div>
      <h2>useReducer 은행에 오신것을 환영합니다</h2>
      <p>잔고: {money}원</p>
      <input 
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
        step="1000"
      />
      <button onClick={() => {
        dispatch({type: ACTION_TYPES.deposit, payload: number})
      }}>예금</button>
      <button onClick={() => {
        dispatch({type: ACTION_TYPES.withdraw, payload: number})
      }}>출금</button>
    </div>
  )
}

export default Usereducer