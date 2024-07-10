import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ColorDetection from './Color-detection/ColorDetection'
import ShortestPath from './ShortestPath/ShortestPath'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SpanningTree from './SpanningTree/SpanningTree'


function App() {

  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ColorDetection />} />
        <Route path="shortest_path" element={<ShortestPath />} />
        <Route exact path="/spanning" element={<SpanningTree/>}/>
        <Route path="*" element={<ColorDetection />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
