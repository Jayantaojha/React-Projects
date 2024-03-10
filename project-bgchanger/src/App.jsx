import { useState } from 'react'

function App() {
  const [color, setColor] = useState("white");


  return (
    <>

      {/* for body */}
      <div className='w-full h-screen duration-500' style={{backgroundColor: color}}></div>

      {/* for buttons */}
      <div className='w-15vw h-40vh p-3 rounded-md absolute top-[15vh] left-[3vw] md:left-[1vw] flex justify-between bg-slate-800 items-center flex-col gap-y-8 border-[1px] border-black'>

        <button className='bg-white text-black p-3 rounded-xl' onClick={() => setColor("white")}>White</button>
        <button className='bg-red-600 text-white p-3 pl-5 pr-5 rounded-xl' onClick={() => setColor("red")}>Red</button>
        <button className='bg-green-600 text-white p-3 rounded-xl' onClick={() => setColor("green")}>Green</button>
        <button className='bg-blue-600 text-white p-3 pl-5 pr-5 rounded-xl' onClick={() => setColor("blue")}>Blue</button>
        <button className='bg-black text-white p-3 pl-5 pr-5 rounded-xl' onClick={() => setColor("black")}>Black</button>

      </div>

    </>
  )
}

export default App
