import { Component } from "react";
import Click from "./Click";

class Counter extends Component {
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
            {/* <button onClick={this.inc}>+</button> */}
            <Click events={{onClick: this.inc}} text = "Click" ></Click>

      </div>
    )
  }
}

export default Counter
