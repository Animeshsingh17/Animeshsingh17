import React from 'react'

const Hello = ()=>{
return React.createElement('div',{id:'Hello',className:'dummyclass'},React.createElement('h1',null,"hello animesh"))
}
// export class Hello extends Component {
//   render() {
//     return (
//       <div>{`Hello  ${this.props.name}`}</div>
//     )
//   }
// }

export default Hello
