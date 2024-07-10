import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ColorDetection from './Color-detection/ColorDetection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ColorDetection />
    </>
  )
}

export default App
