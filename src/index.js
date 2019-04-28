import React, { Component } from "react"
import ReactDOM from "react-dom"

import "./styles.css"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      val1: 0,
      val2: 0
    }
    this.inputChange = this.inputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  inputChange(event) {
    this.setState({ [event.target.id]: event.target.value })
  }
  handleSubmit(event) {
    event.preventDefault()
    const val1 = Number(this.state.val1)
    const val2 = Number(this.state.val2)
    const sum = (val1 + val2)
      .toFixed(10)
      .toString()
      .replace(/0*$/, "")
    alert(sum)
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="App">
        <label>
          Первое число
          <input
            id="val1"
            value={this.state.val1}
            onChange={this.inputChange}
          />
        </label>
        <label>
          Второе число
          <input
            id="val2"
            value={this.state.val2}
            onChange={this.inputChange}
          />
        </label>
        <button>Сложить</button>
      </form>
    )
  }
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
