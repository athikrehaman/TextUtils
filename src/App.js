// import logo from './logo.svg';
import "./App.css";
import Alert from "./components/Alert";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";


function App() {
  const [alert, setAlert] = useState(null);
  const [mode, setMode] = useState('light');

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert('null');
    }, 2000);
  }
  const togglemode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#182b3f";
      showAlert("Dark mode Enabled", "success");
      document.title = "TextUtils DarkMode";
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode Enabled", "success")
      document.title = "TextUtils LightMode";
    }
  }
  // const togglemodegreen = () => {
  //   if(mode === "light"){
  //     setMode("dark");
  //     document.body.style.backgroundColor = "#2d602d";
  //     showAlert("Green mode Enabled","success");
  //   }
  //   else{
  //     setMode("light");
  //     document.body.style.backgroundColor = "white";
  //     showAlert("Light mode Enabled","success")
  //   }
  // }
  return (
    <>
      {/* <Router> */}
        <Navbar title="Athik's Website" about="About us" mode={mode} togglemode={togglemode} /*togglemodegreen={togglemodegreen}*/ />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Switch> */}
          {/* <Route path="/about">
            <About />
          </Route> */}

          {/* <Route path="/"> */}
            <Textform showAlert={showAlert} heading='Enter the text here' mode={mode} />
          {/* </Route> */}
        {/* </Switch> */}

          {/* <Routes>
            <Route path="/about" element={<About  mode={mode}/>} />
            <Route path="/" element={<Textform showAlert={showAlert} heading='Enter the text here' mode={mode} />} />
          </Routes> */}


        </div>
      {/* </Router> */}


    </>
  );
}

export default App;
