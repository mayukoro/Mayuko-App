import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import PrimarySearchAppBar from './Components/PrimarySearchAppBar';
import UserPhoto from './Components/UserPhoto';
import TextField from '@material-ui/core/TextField';
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


class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      userId:14
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

  componentDidMount = () => {
    Axios.get('http://localhost:3001/users/'+ {id: this.state.userId})
    .then((results) => {
      console.log(results.data)
      this.setState({userMail:results.data.mail})
      this.setState({userPassword:results.data.password})
    })
    .catch((error) =>{
      console.log(error)
    })
  }
  
  render() {

    return (
      <div>
        <PrimarySearchAppBar history= {this.props.history}/>
      <Grid container spacing={24}> 
        <Grid item xs={6}>
         
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
          label=""
          className={classes.textField}
          value={this.state.userMail}
          onChange={this.handleChangeMail('mail')}
          margin="normal"
        />
       
        <TextField
          id="standard-password"
          label=""
          className={classes.textField}
          value={this.state.userPassword}
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

export default Profile;


