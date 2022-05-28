import { Component } from 'react'

class Header extends Component {

  render() {
    return (
      <div>
        <input
          value={this.props.textfield} 
          onChange={event => {
            this.props.updateTextField(event.target.value)
          }}
          onKeyUp={event => {
            if (event.key === 'enter') this.props.addToDo()
            console.log(event.key);
          }}
        />
        <button onClick={() => this.props.addToDo()} >submit</button>
        <br />
        <input
          style={{margin: '12px 0'}}
          placeholder="search here"
          value={this.props.searchfield}
          onChange={event => {
            this.props.updateSearchField(event.target.value)
          }}
        />
      </div>
    )
  }
}

export default Header