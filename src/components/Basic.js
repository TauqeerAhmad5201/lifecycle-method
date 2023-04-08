import React, { Component } from 'react'

export default class Basic extends Component {
    constructor() {
      super()
    
      this.state = {
         data: "Hello Tauqeer"
        
         
      }
      console.log('Warning!')
    }
    
  render() {
    return (
      <>
      {setTimeout(() =>  console.log('Hi') ,5000)}
      <h2>{this.state.data}</h2>
      </>
    )
  }
}
