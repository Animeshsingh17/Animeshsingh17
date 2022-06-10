import React,{Component} from "react";
//props are not mutable 
class Welcome extends Component {
  render(){
    const{name,heroName} = this.props;
    // const{state1,state2} = this.state;
    return <p>Welcome {name}  a.k.a  {heroName}</p>
  }
}
// const Welcome = (props) => {
//     return (
      
//       <div>
//       <Hello name={props.name}/>
//       </div>
//     )
//   }
  export default Welcome