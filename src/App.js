import React, { useState, useEffect } from 'react'

function App() {

  const [count, setCount] = useState(-1)

  useEffect(() => {
    console.log('somou')
  }, [count])

  return (
    <div style={{
      display: 'flex',
      flex: 1,
      alignItems: 'center',
      flexDirection: 'column'
    }} >
      <h1
        style={{
          marginBottom: 20,
          textAlign: 'center'
        }}
      >
        {count}
      </h1>
      <button
        onClick={() => setCount(count + 1)}
      >
        Somar +1
      </button>

    </div>
  )
}

export default App
