import React, { Component } from 'react';
import PrimarySearchAppBar from './Components/PrimarySearchAppBar';
import ButtonBases from './Components/ButtonBases';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
  }

  
  render() {
    return (
      <div>
        <PrimarySearchAppBar/>
        <ButtonBases/>
      </div>
    );
  }
}

export default App;




// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

// export default App;
