import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0)

  function increaseNum() {
    setNum(num + 1)
  }

  function decreaseNum() {
    setNum(num - 1)
  }

  function resetNum() {
    setNum(0)
  }

  return (
    <div className='main'>

      <div className="card">

        <p className='title'>Cute Counter 🎀</p>

        <h1>{num}</h1>

        <div className="buttons">

          <button onClick={increaseNum}>＋</button>

          <button onClick={resetNum}>♡</button>

          <button onClick={decreaseNum}>－</button>

        </div>

      </div>

    </div>
  )
}

export default App