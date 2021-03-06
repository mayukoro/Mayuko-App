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
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './App.css';
import Axios from 'axios';


const classes = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit*4,
    marginRight: theme.spacing.unit,
    width: 250,
  },
});


class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      firstname: '',
      lastname: '',
      mail:'',
      password:''
    }
  }


  handleChangeFirstName = firstname => event => {
    this.setState({ [firstname]: event.target.value });
  };

  handleChangeLastName = lastname => event => {
    this.setState({ [lastname]: event.target.value });
  };

  handleChangeMail = mail => event => {
    this.setState({ [mail]: event.target.value });
  };

  handleChangePassword = password => event => {
    this.setState({ [password]: event.target.value });
  };

  handleClickOpen = () => {
    Axios.post('http://localhost:3001/users/' ,
    {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      mail:this.state.mail,
      password:this.state.password
    })
    .then((results) => {
      console.log(results)
    })
    .catch((error) =>{
      console.log(error)
    })
    alert(this.state.firstname + ' ' + this.state.lastname);
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
        <TextField
          id="standard-name"
          label="First Name"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChangeFirstName('firstname')}
          margin="normal"
        />
       
       <TextField
          id="standard-name"
          label="Last Name"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChangeLastName('lastname')}
          margin="normal"
        />

       <TextField
          id="standard-mail"
          label="Mail Address"
          className={classes.textField}
          value={this.state.mail}
          onChange={this.handleChangeMail('mail')}
          margin="normal"
        />
       
        <TextField
          id="standard-password"
          label="Password"
          type="password"
          className={classes.textField}
          value={this.state.password}
          onChange={this.handleChangePassword('password')}
          margin="normal"
        />
       
       <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
          保存
        </Button>
     
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
