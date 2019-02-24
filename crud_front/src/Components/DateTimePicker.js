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
    marginLeft: theme.spacing.unit*6,
    marginRight: theme.spacing.unit,
    width: 200,
    fontsize:20,
  },
});


class DateAndTimePickers extends React.Component{
  
  state = {

    currency: '',
  };

  

 render() {
  const { classes } = this.props;
  return (
    <form className={classes.container} noValidate>
      <TextField
        id="date"
        label="Date"
        type="date"
        defaultValue=""
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        helperText="日にちを選択してください"
      />
      
    </form>
  );
  }
}

DateAndTimePickers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DateAndTimePickers);