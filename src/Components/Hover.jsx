import { Component } from "react";
import Click from "./Click";

class Hover extends Component {
    constructor(){
        super()
        this.state = {
            count: 0
        }
  
    } 

    inc = () =>{
        this.setState((preVal) => ({
          count: preVal.count+1
        }))
    }
  render() {
    return (
      <div>
            <h1>Count : {this.state.count}</h1>
            <Click events={{onMouseUp: this.inc} } text = "Click Me"  ></Click>
      </div>
    )
  }
}

export default Hover
