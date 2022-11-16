// import logo from './logo.svg'; //put photo into src folder and import
// import './App.css'; //all css in index, use styled components

import AboutMe from './components/About';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ContactMe from './components/Contact';

function App() {
  //write function in app to change state isHome to true and call in home

  return (
    <>
      {/* how to make sure navbar only shows on some pages*/}
      {/* possibly just put it on each page?? */}
      {/* <NavBar /> */}
      <Home />
      <AboutMe />
      <Projects />
      <Skills />
      <ContactMe />
    </>
  );
}

export default App;

//maybe keep some kind of state that goes to true when component is anything but home.
//make a useEffect that checks when component changes, and adds or deletes nav

//leaving this hear to review code tag below
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
