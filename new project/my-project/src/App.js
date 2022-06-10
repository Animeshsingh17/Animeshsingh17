import React from 'react'
import {Greet, TryHard} from "./components/Greet";
import Welcome from './components/Welcome';
import Bye from './components/Bye';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
const App = () => {
  return (
    <div className="App">
    <Counter/>
    {/* <Greet name = "Bruce" heroName="batman"></Greet><p>This is a children props</p> <Greet/>
    <Greet name = "Clark" heroName="Spider-Man"/>
    <button> Action </button>
    <Greet name = "Diana" heroName="Wonder-Woman"/>
    <TryHard/>
    <Welcome name = "Bruce" heroName="batman"/>
    <Welcome name = "Clark" heroName="Spider-Man"/>
    <Welcome name = "Diana" heroName="Wonder-Woman"/>
    <Hello/>
    <Message/> */}
    <Welcome name = "Bruce" heroName="batman"/>
    <Greet name = "Diana" heroName="Wonder-Woman"/>
    <Bye/>
    </div>
  )
  }

<greet />

export default App