import React, { Component } from 'react'

class Form extends Component {
    constructor(){
        super()
        this.state = {
            t : "",
            p : ""
        }
    }

    
    trap_p = (event) => {
        this.setState({p : event.target.value})
       
    }


  render() {
    return (
      <div>
        <input type="text" placeholder='name' value={this.state.t}  />
        <br /><br />
        <input type="text" placeholder='password' value={this.state.p} onChange={this.trap_p} />
      </div>
    )
  }
}

export default Form
