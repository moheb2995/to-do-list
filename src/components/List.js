import { Component } from "react";
import ListItem from "./ListItem";

export default class List extends Component {


  render() {
    return (
      <div className="container">
        {
          this.props.list.map((item) => {
            return (
              <ListItem
                key={item.id}
                switchDone={this.props.switchDone}
                deleteToDo={this.props.deleteToDo}
                item={item}
              />
            )
          })
        }
        

      </div>
    )
  }
} 