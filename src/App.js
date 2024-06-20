import React, { useState } from 'react'
import Navbar from './Component/Navbar.js'
import Form from './Component/Form.js'
import About from './Component/About.js'
function App() {
  const [mode, SetMode] = useState("dark")
  return (
    <>
      <Navbar title={"Subhash"} mode={mode} />
      <Form heading="this is Case Changer" />
      {/* <About /> */}
    </>
  )
}

export default App