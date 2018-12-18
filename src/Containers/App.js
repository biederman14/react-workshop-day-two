import React, { Component } from 'react'
 import Headline from '../Components/Headline/Headline'

class App extends Component {
  render() {
    return (
      <div>
        <Headline isColor text={"Hello from props."} />
        <Headline isColor={false} text={"Wuzzup from bops."} />
        <Headline isColor text={"Ciao from whops."} />
        <p>This is some basic content.</p>
        <p>THis shouldn't be styled.</p>
      </div>
    );
  }
}
export default App;