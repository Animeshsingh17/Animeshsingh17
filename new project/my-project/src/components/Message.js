import React,{Component} from "react";
//props are not mutable 
class Message extends Component {
constructor(){
    super()
    this.state={
        message:"Welcome visitor"
    }
}
changeMessage(){
    this.setState({
        message:"Thank you for subscribing"
    })
}
  render(){
    return (
        <> 
        <h1>{this.state.message}</h1>
        <button onClick={()=>this.changeMessage()}>Subscribe</button>
        </>
    )
  }
}

// const Welcome = (props) => {
//     return (
      
//       <div>
//       <Hello name={props.name}/>
//       </div>
//     )
//   }
  export default Message