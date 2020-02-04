import React, { useState, useEffect } from 'react'

function App() {

  const [count, setCount] = useState(-1)
  const [numberList, setNumberList] = useState([count])

  useEffect(() => {
    console.log('mudou o estado')
  }, [count, numberList])

  return (
    <div style={{
      display: 'flex',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }} >
      <div
        style={{ flexDirection: 'column' }}
      >
        <h1
          style={{
            marginBottom: 20,
            textAlign: 'center'
          }}
        >
          {count}
        </h1>
        <div style={{ flexDirection: 'row' }}>
          {numberList.length > 1 ? (
            numberList.map((value, index) => (
              <h3
                style={{ textAlign: 'center' }}
              >
                [{value}{index !== numberList.length - 1 ? ', ' : null}]
              </h3>
            ))) : (
              <h2>[{numberList[0]}]</h2>
            )}
        </div>
      </div>
      <div style={{ flexDirection: 'row' }}>
        <button
          style={{ marginRight: 5 }}
          onClick={() => setCount(count + 1)}
        >
          +
      </button>
        <button
          style={{ marginRight: 5 }}
          onClick={() => setCount(count - 1)}
        >
          -
      </button>
        <button
          style={{ marginRight: 5 }}
          onClick={() => setNumberList([...numberList, count])}
        >
          [+number]
        </button>
      </div>
    </div>
  )
}

export default App
