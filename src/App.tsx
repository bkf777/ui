import { useEffect, useState } from 'react'
import MyLayout from './component/Layout'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <MyLayout />
    </>
  )
}

export default App
