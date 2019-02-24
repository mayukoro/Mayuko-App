import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit*6,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});

const currencies = [
  {
    value: 'one',
    label: '1',
  },
  {
    value: 'two',
    label: '2',
  },
  {
    value: 'there',
    label: '3',
  },
  {
    value: 'four',
    label: '4',
  },
];

class SelectPeople extends React.Component {
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
          label="People"
          className={classes.textField}
          value={this.state.currency}
          onChange={this.handleChange('currency')}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="募集する人数を選択してください"
          margin="normal"
        >
          {currencies.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
       
      </form>
    );
  }
}

SelectPeople.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SelectPeople);