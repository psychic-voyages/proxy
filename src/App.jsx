import { useState } from 'react'
import './App.css'

async function fetchJSON (url, method) {
  const rsp = await fetch(url, {
    method
  });
  const json = await rsp.json();
  return json
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Decisions, decisions...</h1>
      <button onClick={async () => {
        console.log("pop");
      }}>Click Me</button>
      <button onClick={async () => {
        console.log("burst");
      }}>Click Me</button>
    </>
  )
}

export default App
