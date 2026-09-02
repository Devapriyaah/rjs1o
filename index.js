import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header" id="centre">
      <h2 className="h2">I clicked this button {count}</h2>
      <button type="button" onClick={() => {setCount(count + 1)}} className="counter">Increment</button>
      <button type="button" onClick={() => {setCount(count - 1)}} className="counter">Decrement</button>
      </header>
    </div>
  )
}

export default App
