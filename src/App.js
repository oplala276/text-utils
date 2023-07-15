import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import About from './components/About';
function App() {
  const [mode, setMode] = useState('light');
  const [text, setText] = useState({
    color: 'black',
  });
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggle = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'rgb(0 101 122)';
      showAlert("Dark mode is enabled", "success")
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is enabled", "primary")
    }
  }

  return (
    <>
      <Navbar mode={mode} toggle={toggle} />
      <Alert alert={alert} />
      <div className="container my-4">
        <TextForm mode={mode} />
      </div>
    </>
  );
}

export default App;
