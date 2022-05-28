import React, {Component} from 'react'
import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import uuid from './components/uuid'

class App extends Component {
  constructor() {
    super()
    this.state = {
      textfield: '',
      searchfield: '',
      toDoList: [{
          text: 'walk the dog',
          done: false,
          id:uuid()
        },
        {
          text: 'feed the cat',
          done: false,
          id:uuid()
        }
      ]
    }
  }

  render() {
   
    const updateTextField = str => {
      this.setState({
        textfield: str
      })
    }

    const updateSearchField = str => {
      this.setState({
        searchfield: str
      })
    }

    const addToDo = () => {

      if (!this.state.textfield) return alert('please, enter some text first')
  
      this.setState({
        toDoList: [...this.state.toDoList, {
          text: this.state.textfield,
          done: false,
          id:uuid()
        }],
        textfield: ''
      })
    }

    const switchDone = id => {
      const arr = [...this.state.toDoList]

      const i = arr.findIndex(item => item.id === id)

      arr[i].done = !arr[i].done
      this.setState({
        toDoList: arr
      })
    }
    
    const deleteToDo = id => {
      const arr = [...this.state.toDoList]
      const i = arr.findIndex(item => item.id === id)

      arr.splice(i, 1)

      this.setState({
        toDoList: arr
      })
    }
   
    console.log(this.state)
    return (
      <div className="App">
        <h1 className="">to do list</h1>
        <Header
          textfield={this.state.textfield}
          updateTextField={updateTextField}
          addToDo={addToDo}
          searchfield={this.state.searchfield}
          updateSearchField={updateSearchField}
        />
        <Main
        // filter prosee
          list={this.state.toDoList.filter(item =>item.text.toLowerCase().includes(this.state.searchfield.toLowerCase()))}

          switchDone={switchDone}
          deleteToDo={deleteToDo}
        />
      </div>
    );
  }
}

export default App;