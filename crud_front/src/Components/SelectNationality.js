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
    width: 200,
  },
});

const nationalities = [
  {
    value: '1',
    label: 'Japan',
  },
  {
    value: '2',
    label: 'England',
  },
  {
    value: '3',
    label: 'France',
  },
  {
    value: '4',
    label: 'Germany',
  },
];

class SelectNationality extends React.Component {
  state = {
    currency: '',
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">

        <TextField
          id="standard-select-currency"
          select
          label="Nationality"
          className={classes.textField}
          value={this.state.currency}
          onChange={this.handleChange('currency')}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          margin="normal"
        >
          {nationalities.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
       
      </form>
    );
  }
}

SelectNationality.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SelectNationality);