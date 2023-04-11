import React, { Component } from 'react'

export default class RenderMethod extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         data: "Bhappo"
      }
    }
    componentDidMount (){
        console.log('Hello from component from DidMount')
        console.log('Hello from component DidMount #2')
        setTimeout(() =>  console.log('Hello from DidMount setTimout') ,8000)
    }; 
    
    
  render() {
    console.log('Hello from render #1')
    setTimeout(() =>  console.log('Hello from render #2 setTimeout') ,5000)
    return (
      <div>
        {setTimeout(() =>  console.log('Hi from return') ,10000)}
      </div>
    )
  }
}
