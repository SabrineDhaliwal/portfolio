import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import DevPage from './Pages/DevPage'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>

     <BrowserRouter>
     <Routes>
      <Route path ='/' element={<DevPage />} />
     </Routes>
     
     </BrowserRouter>
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
       
    
      
    </>
  )
}

export default App
