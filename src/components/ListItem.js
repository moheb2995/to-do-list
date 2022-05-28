import { Component } from 'react'

export default class ListItem extends Component {

  render() {
    return (
      <div className="todo">
        <div style={{textDecoration: (this.props.item.done ? 'line-through' : 'none')}} > {this.props.item.text} </div>
        <div className="button-container">
          <button onClick={() => this.props.switchDone(this.props.item.id)}>scratch</button>
          <button onClick={() => this.props.deleteToDo(this.props.item.id)} > trash </button>
        </div>
      </div>
    )
  }
}