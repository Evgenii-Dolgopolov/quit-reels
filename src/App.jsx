import React, { useState } from "react"

const App = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  const resetCounter = () => {
    setCount(0)
  }

  return (
    <>
      <div className="main">
        <h1>Quit Reels</h1>
        <h2>Put down your phone and pick up your legacy</h2>
        <p>
          I haven't scrolled any <strong>Reels</strong> for {count} days
        </p>
        <button className="counter-btn" onClick={increment}>
          Add a day
        </button>
        <button className="reset" onClick={resetCounter}>
          I fucked up and scrolled some memes today (reset counter)
        </button>
      </div>
    </>
  )
}

export default App
