import React, { Component } from 'react'

export default class RenderMethod extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         data: "Bhappo"
      }
    }
    
    
  render() {
    setTimeout(() =>  console.log('Hello from render') ,3000)
    return (
      <div>
        {setTimeout(() =>  console.log('Hi') ,5000)}
      </div>
    )
  }
}
