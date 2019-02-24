import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit*6,
    marginRight: theme.spacing.unit,
    width: 200,
    fontsize:20,
  },
});

const currencies = [
  {
    value: '1',
    label: '11:00　〜　12:00',
  },
  {
    value: '2',
    label: '12:00　〜　13:00',
  },
  {
    value: '3',
    label: '13:00　〜　14:00',
  },
  {
    value: '4',
    label: '14:00　〜　15:00',
  },
];

class SelectTime extends React.Component{
  
  state = {

    currency: '',
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

 render() {
  const { classes } = this.props;
  return (
    <form className={classes.container} noValidate>
      
      <TextField
          id="standard-select-currency"
          select
          label="Time"
          className={classes.textField}
          value={this.state.currency}
          onChange={this.handleChange('currency')}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="時間を選択してください"
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

SelectTime.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SelectTime);