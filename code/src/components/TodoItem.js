import React from "react"
import "./style.css"

export default class TodoItem extends React.Component {

handleCheckboxChange = () => {
  this.props.onChange(this.props.id)
}

handleRemove = () => {
  this.props.delete(this.props.id)
}

render() {
  return (
    <div className="the-list">
      <div className="item-list">
        <label>
          <input
            type="checkbox"
            onChange={this.handleCheckboxChange}
            checked={this.props.done} />
          <span className="checkmark" />
          {this.props.text}
          <button className="delete-button" onClick={this.handleRemove}><i className="fa fa-times" aria-hidden="true" /></button>
        </label>
      </div>
    </div>
  )
}

}
