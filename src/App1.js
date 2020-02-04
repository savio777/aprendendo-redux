import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  render() {
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
          {this.state.count}
        </h1>
        <button
          onClick={() => this.setState({ count: this.state.count + 1 })}
        >
          Somar +1
        </button>
      </div>
    )
  }
}

export default App
