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
        setTimeout(() =>  console.log('Hello from DidMount setTimout') ,5000)
    }; 
    
    
  render() {
    setTimeout(() =>  console.log('Hello from render') ,3000)
    return (
      <div>
        {setTimeout(() =>  console.log('Hi') ,5000)}
      </div>
    )
  }
}
