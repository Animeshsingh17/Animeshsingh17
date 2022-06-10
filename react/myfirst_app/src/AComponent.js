import React, { Component } from 'react'

export class AComponent extends Component {
  render() {
    return (
       <>
            <Greet />
        <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>whatsApp</li>
          <li>snapchat</li>
        </ul>
      </div>
       </>
    )
    
  }
}

export default AComponent

function Greet({ message }) {
       
  <h1>{`Hello , ${message}`} </h1>;
}
module.exports=Greet;