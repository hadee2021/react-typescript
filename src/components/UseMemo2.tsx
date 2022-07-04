import { useMemo } from "react"
import { useState ,useEffect } from "react"

function UseMemo2() {
  const [number, setNumber] = useState(0)
  const [iskorea, setIsKorea] = useState(false)

  const location = useMemo(() => {
    return {
      country: iskorea ? '한국' : '외국'
    }
  }, [iskorea])

  // 객체는 리렌더링되면 주소가 새롭게 초기회된다
  // useEffect 에서 location이 변한걸로 인식
  // const location = {
  //   country: iskorea ? '한국' : '외국'
  // }

  useEffect(() => {
    console.log('useEffect 호출')
  }, [location])
  return (
    <div>
      <h2>하루에 몇끼 먹어요???</h2>
      <input
        type="number"
        value={number}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNumber(Number(e.target.value))}
      />
      <hr/>
      <h2>어느 나라에 있어요?</h2>
      <p>나라: {location.country}</p>
      <button onClick={() => setIsKorea(!iskorea)}>비행기 타자</button>
    </div>
  )
}

export default UseMemo2