import { Link } from 'react-router-dom'
function Home() {
  return (
    <div className='link'>
      <Link to='/useState'>useState</Link> <br/>
      <Link to='/useEffect'>UseEffect</Link> <br/>
      <Link to='/useEffect2'>UseEffect2</Link> <br/>
      <Link to='/useRef'>UseRef</Link> <br/>
      <Link to='/useRef2'>UseRef2</Link> <br/>
      <Link to='/useRef3'>UseRef3</Link> <br/>
      <Link to='/useRef4'>UseRef4</Link> <br/>
      <Link to='/useContext'>UseContext</Link> <br/>
      <Link to='/useMemo'>UseMemo</Link> <br/>
      <Link to='/useMemo2'>UseMemo2</Link> <br/>
      <Link to='/useCallback'>UseCallback</Link> <br/>
      <Link to='/useCallback2'>UseCallback2</Link> <br/>
      <Link to='/usereducer'>Usereducer</Link> <br/>
      <Link to='/usereducer2'>Usereducer2</Link> <br/>
      <Link to='/reactMemo'>ReactMemo</Link> <br/>
      <Link to='/reactMemo2'>ReactMemo2</Link> <br/>
      <Link to='/reactMemo3'>ReactMemo3</Link> <br/>
    </div>
  )
}

export default Home