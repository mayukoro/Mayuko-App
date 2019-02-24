import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
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


class NameBox extends React.Component {
  state = {
    firstname: '',
    lastname: '',
  };

  handleChangeFirstName = firstname => event => {
    this.setState({ [firstname]: event.target.value });
  };

  handleChangeLastName = lastname => event => {
    this.setState({ [lastname]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">

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
      </form>
    );
  }
}

NameBox.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NameBox);