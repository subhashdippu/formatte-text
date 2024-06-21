import React, { useState } from 'react'
import Navbar from './Component/Navbar.js'
import Form from './Component/Form.js'
// import About from './Component/About.js'
import Alert from './Component/Alert.js'
function App() {
  const [mode, SetMode] = useState("dark")
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000)
  }
  const toggleMode = () => {
    if (mode === "light") {
      SetMode("dark")
      document.body.style.backgroundColor = "#4832a8"
      showAlert("Dark mode turn on", "success")
    }
    else {
      SetMode("light")
      document.body.style.backgroundColor = "white"
      showAlert("Light mode turn on", "success")
    }
  }
  return (
    <>
      <Navbar title={"Subhash"} mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Form showAlert={showAlert} heading="this is Case Changer" />
      {/* <About /> */}
    </>
  )
}

export default App