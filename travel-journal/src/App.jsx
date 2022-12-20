import { useState } from 'react'
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import data from "./data"


function App() {
  let cardElements = data.map(item => {
    return (
      <Card
          key={item.id}
          item={item}
      />
    )
  })
  
  return (
    <div className="container">
      <Navbar />
      {cardElements}
    </div>
  )
}

export default App