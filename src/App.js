import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';

// Learning to use the react router so we have to import the stuff from the react router

// Use this version - npm install react-router-dom@5.2.0
// import {
//   BrowserRouter as Router,
//   Switch, Route, Link
// } from "react-router-dom"


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

//LEARNING THE PART FROM WHERE HARRY IS TEACHING THE JSX PART

//for example if we want, we can create a variable called harry

// let name = "Bashaar";

// function App() {
//   return (
//     // <div className="blank">Lovely</div>
//     // creating a testing navbar

//     // Basically over here, we are making it like the JSX strucutre
//     <>

//     <nav>
//       <li>Home</li>
//       <li>About</li>
//       <li>Contact</li>
//     </nav>

//     <h1>Hello {name}</h1>

//     <div className = "container">
//       <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui incidunt expedita eaque dolor. Maxime error laborum commodi asperiores unde possimus totam consequatur aperiam.</p>
//     </div>

//     </>


//   );
// }

// LEARNING HOW TO PUT BOOTSTRAP INTO REACTJS
function App() {

  //Creating another state - this state variable will tell if the dark mode is enabled or not
  const [mode, setMode] = useState("light")

  //Creating an alert state
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

  //If you want your title to kinda flash for attracting the user attention then you can do the following thing
  // setInterval(() => {
  //     document.title = "Something no1 i can put here"
  // }, 2000);

  // Then I can just replicate the above line and change the interval timing to something else that's it

  const toggleMode = () => {
    if (mode === "light") {
      setMode('dark');
      document.body.style.backgroundColor = '#042743'
      showAlert('Dark mode has been enabled !', "warning")
      document.title = "Bashaar's App - (Dark)"

    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert('Light mode has been enabled !', "danger")
      document.title = "Bashaar's App - (Light)"

    }
  }

  return (
    <>

      {/* here I have cut the bootstrap navbar code from here, and rather I will add it as a custom compoment there */}


      {/* Everything must be inside the REACT Router so we can put a router over here */}
      {/* <Router> */}

      <Navbar title="Bashaar's Text-Operator" mode={mode} toggleMode={toggleMode}></Navbar>
      <Alert alert={alert}></Alert>
      <div className="container">

        {/* We will now insert the SWITCH here */}
        {/* <Switch> */}

        {/* <Route exact path="/about"> */}
        {/* </Route> */}

        {/* <Route exact path="/"> */}
        <TextForm heading='Enter text to perform operations' mode={mode} showAlert={showAlert}></TextForm>
        {/* <About /> */}
        {/* </Route>   */}

        {/* </Switch> */}
      </div>
      {/* </Router> */}

    </>
  )

}

export default App;