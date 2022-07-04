import './App.css'
import Menu from './components/Menu'
import Home from './components/Home'
import UseState from './components/UseState'
import UseEffect from './components/UseEffect'
import UseEffect2 from './components/UseEffect2'
import UseRef from './components/UseRef'
import UseRef2 from './components/UseRef2'
import UseRef3 from './components/UseRef3'
import UseRef4 from './components/UseRef4'
import UseMemo from './components/UseMemo'
import UseMemo2 from './components/UseMemo2'
import UseCallback from './components/UseCallback'
import UseCallback2 from './components/UseCallback2'
import Usereducer from './components/UseReducer'
import Usereducer2 from './components/UseReducer2'
// import ReactMemo from './components/ReactMemo' 
// import ReactMemo2 from './components/ReactMemo2'
// import ReactMemo3 from './components/ReactMemo3'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/useState' element={<UseState/>} />
          <Route path='/useEffect' element={<UseEffect />}/>
          <Route path='/useEffect2' element={<UseEffect2 />}/>
          <Route path='/useRef' element={<UseRef />}/>
          <Route path='/useRef2' element={<UseRef2 />}/>
          <Route path='/useRef3' element={<UseRef3 />}/>
          <Route path='/useRef4' element={<UseRef4 />}/>
          <Route path='/useMemo' element={<UseMemo />}/>
          <Route path='/useMemo2' element={<UseMemo2 />}/>
          <Route path='/useCallback' element={<UseCallback />}/>
          <Route path='/useCallback2' element={<UseCallback2 />}/>
          <Route path='/usereducer' element={<Usereducer />}/>
          <Route path='/usereducer2' element={<Usereducer2 />}/>
          {/* <Route path='/reactMemo' element={<ReactMemo />}/>
          <Route path='/reactMemo2' element={<ReactMemo2 />}/>
          <Route path='/reactMemo3' element={<ReactMemo3 />}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
