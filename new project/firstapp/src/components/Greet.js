import React from 'react'

// export const Greet = props => {
//     const {name,heroName}=props;
//   return(
//   <>
// <h6> { `Hello  ${name} you are  ${heroName}`}</h6>
// </>
// ) 
// }
//es6 arrow function 
export const Greet = ({name,heroName}) => {
    console.log(name);
  return(
  <>
<h6> { `Hello  ${name} you are  ${heroName}`}</h6>
</>
) 
}
export const  TryHard=()=><p>TryHard</p>

// const Greet = (props) => {
//   return (
//     <div> <Welcome name={props.name} /></div>
//   )
// }

// export default greet