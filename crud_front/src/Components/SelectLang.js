import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import Input from '@material-ui/core/Input';
import Chip from '@material-ui/core/Chip';

const BootstrapInput = withStyles(theme => ({
  root: {
    'label + &': {
      marginTop: theme.spacing.unit * 5,
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 20,
    width: 'auto',
    padding: '7px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    marginLeft: theme.spacing.unit*4,
    marginRight: theme.spacing.unit,
    width: 250,
    // margin: theme.spacing.unit*6,
  },
  bootstrapFormLabel: {
    fontSize: 14,
  },
  formControl: {
    margin: theme.spacing.unit*4,
    minWidth: 300,
    maxWidth: 1200,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing.unit / 4,
  },
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const languages =[
  'Japanese',
  'English',
  'French',
  'Spanish',
  'German',

]


class SelectLang extends React.Component {
  state = {
    language:[],
  };

  

  handleChangeLanguage = event => {
    this.setState({ language: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.root} autoComplete="off">

        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="select-multiple-chip">Languages</InputLabel>
          <Select
            multiple
            value={this.state.language}
            onChange={this.handleChangeLanguage}
            input={<Input id="select-multiple-chip" />}
            renderValue={selected => (
              <div className={classes.chips}>
                {selected.map(value => (
                  <Chip key={value} label={value} className={classes.chip} />
                ))}
              </div>
            )}
            MenuProps={MenuProps}
          >
            {languages.map(language => (
              <MenuItem key={language} value={language} >
                {language}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </form>
      
    );
  }
}

SelectLang.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SelectLang);