import { Component } from 'react'
import List from './List'

export default class Main extends Component {

  render() {
    return (
      <List
        list={this.props.list}
        switchDone={this.props.switchDone}
        deleteToDo={this.props.deleteToDo}
      />
    )
  }
}

