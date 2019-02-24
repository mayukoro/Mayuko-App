import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
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


class MailPassBox extends React.Component {
  state = {
    mail: '',
    password: '',
  };

  handleChangeMail = mail => event => {
    this.setState({ [mail]: event.target.value });
  };

  handleChangePassword = password => event => {
    this.setState({ [password]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">

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
      </form>
    );
  }
}

MailPassBox.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MailPassBox);