import React from "react"
import Component1 from "./component1"
import Data from './data'

function App() {


  const components = Data.map(items => {
    return (
      <Component1
        key={items.id}
        images={items.image}
        titles={items.title}
        describe={items.describes} />)
  }
  )
  return (
    <div className="App">
      <div className="heading1"><h2>Emoji Meaning
      </h2></div>
      {components}

    </div>
  )
}

export default App;
