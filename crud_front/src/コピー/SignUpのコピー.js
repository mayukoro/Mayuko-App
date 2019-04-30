import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import PrimarySearchAppBar from './Components/PrimarySearchAppBar';
import SelectNationality from './Components/SelectNationality';
import SelectAge from './Components/SelectAge';
import SelectSex from './Components/SelectSex';
import NameBox from './Components/NameBox';
import MailPassBox from './Components/MailPassBox';
import SelectLang from './Components/SelectLang';
import UserPhoto from './Components/UserPhoto';
import AlertDialog from './Components/AlertDialog';
import OutlinedTextFields from './Components/Message';
import DateAndTimePickers from './Components/DateTimePicker';
import SelectTime from './Components/SelectTime';
import SelectPlace from './Components/SelectPlace';
import SelectPeople from './Components/SelectPeople';
import './App.css';

class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
  }

  
  render() {
    return (
      <div>
        <PrimarySearchAppBar history= {this.props.history}/>
      <Grid container spacing={24}> 
        <Grid item xs={6}>
         <UserPhoto/>
        </Grid>
        <Grid item xs={6}>
         <SelectNationality/>
         <SelectAge/>
         <SelectSex/>
         <NameBox/> 
         <MailPassBox/>
         <SelectLang/>
        </Grid>
      </Grid>
       
         
      <Grid container spacing={24}>  
        <Grid item xs={12}>  
         <OutlinedTextFields/>  
        </Grid>
        <Grid item xs={3}>      
         <DateAndTimePickers/>
        </Grid>
        <Grid item xs={3}>      
         <SelectTime/>
        </Grid>
        <Grid item xs={3}> 
         <SelectPlace/>
        </Grid>
        <Grid item xs={3}> 
         <SelectPeople/> 
        </Grid>
      </Grid> 
      <Grid container spacing={24}> 
       <Grid item xs={12}>
        <AlertDialog/>
       </Grid>
      </Grid>
      </div>
    );
  }
}

export default SignUp;




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
