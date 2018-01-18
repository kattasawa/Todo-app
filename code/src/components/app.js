import React from "react"
import uuid from "uuid/v4"

import TodoItem from "./TodoItem"
import "./style.css"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        { id: uuid(), text: "Do laundry", done: false },
        { id: uuid(), text: "Pay bills", done: true },
        { id: uuid(), text: "Lunchbox", done: false }
      ],
      text: ""
    }

    // getting data from the local storage
    const alldata = JSON.parse(localStorage.getItem("dataItem"))
    if (alldata) { this.state = { items: alldata } }
  }

    // setting up the event handlers to delete/remove an item
    handleRemoveText = (id) => {
      const removeItem = this.state.items.filter(remove => {
        if (remove.id === id) {
          remove.id = !remove.id
        }
        return remove.id
      })

      console.log(removeItem)

      this.setState({
        items: removeItem
      })
    }

  onChange = (event) => {
    this.setState({ text: event.target.value })
  }

  onSubmit = (event) => {
    event.preventDefault()
    const item = {
      id: uuid(),
      text: [...this.state.text],
      done: false
    }
    this.setState({
      text: "",
      items: [...this.state.items, item]
      // ... spread
    })
  }

  //const data = [item, ...this.state.items]
  //localStorage.setItem("dataItem", JSON.stringify(data))

  handleTodoDoneChange = id => {
    const newItems = this.state.items.map(item => {
      if (item.id === id) {
        item.done = !item.done
      }
      return item
    })

    this.setState({
      items: newItems
    })
  }

  render() {
    return (
      <div className="container">

        <form className="App" onSubmit={this.onSubmit}>
          <h1>To do´s! </h1>
          <div className="style-input-line">
            <input value={this.state.text} onChange={this.onChange} />
            <button className="add-button">Add</button>
          </div>

          {this.state.items.map(item => (
            <TodoItem
              key={item.id}
              id={item.id}
              onChange={this.handleTodoDoneChange}
              text={item.text}
              done={item.done}
              delete={this.handleRemoveText} />
          ))}
        </form>
      </div>
    )
  }
}

export default App
