import { useState } from 'react'
import './App.css'
import Form from './components/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
      <h1 className=' text-center bg-green-500 text-black-900'>Task 30: Middleware (CORS and Body-Parser)</h1>
      <Form />
     </div>
    </>
  )
}

export default App
