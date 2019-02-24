import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { EditorFormatAlignCenter } from 'material-ui/svg-icons';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    // marginLeft: theme.spacing.unit,
    // marginRight: theme.spacing.unit,
    
    marginTop: 25,
    height:100,
    width:1200,
    font:20,
  },
  
});


class OutlinedTextFields extends React.Component {
  state = {
    name: 'Cat in the Hat',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        
        <TextField
          id="outlined-full-width"
          label="Message"
          style={{ margin: 10, }}
          placeholder="メッセージを書いてください"
          fullWidth
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
          
        />
      </form>
    );
  }
}

OutlinedTextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedTextFields);