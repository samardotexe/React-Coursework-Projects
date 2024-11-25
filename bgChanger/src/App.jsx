import { useState } from 'react'
import './App.css'

function App() {
  const [color,setColor] = useState("skyblue")
  return (
    <div className = " w-full h-screen duration-200" style={{backgroundColor: color}}>
    <h1 className='text-white bg-transparent underline p-4 text-center font-bold text-4xl'>Click the buttons below  to change the background color</h1>
      <div className = "fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
        <div className='flex flex-wrap justify-center gap-3 shadow-lg py-2 bg-black px-3 rounded-3xl'>
        <button onClick={()=> setColor("skyblue")} className="w-40 outline-none px-4 py-1 rounded-full text-black bg-white shadow-lg">DEFAULT</button>
        <button onClick={()=> setColor("teal")} className="w-40 outline-none px-4 py-1 rounded-full text-black bg-white shadow-lg">TEAL</button>
        <button onClick={()=> setColor("maroon")} className="w-40 outline-none px-4 py-1 rounded-full text-black bg-white shadow-lg">MAROON</button>
        </div>
      </div>
    </div>
  )
}

export default App
