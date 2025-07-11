
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-xl text-center">
        <h1 className="text-2xl font-bold mb-4">Bem-vindo ao ninjaLabs</h1>
        <p>Este é o início do seu projeto Beacons-like!</p>
      </div>
    </div>
  )
}

export default App
