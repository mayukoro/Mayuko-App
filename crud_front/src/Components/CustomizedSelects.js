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
    margin: theme.spacing.unit*2,
  },
  bootstrapFormLabel: {
    fontSize: 14,
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 300,
    maxWidth: 300,
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
  'english',
  'french',
  'spanish',
  'german',

]


class CustomizedSelects extends React.Component {
  state = {
    sex: '',
    nationality: '',
    age: '',
    language:[],
  };

  handleChangeSex = event => {
    this.setState({ sex: event.target.value });
  };

  handleChangeNationality = event => {
    this.setState({ nationality: event.target.value });
  };

  handleChangeAge = event => {
    this.setState({ age: event.target.value });
  };

  handleChangeLanguage = event => {
    this.setState({ language: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.root} autoComplete="off">
        
        <FormControl className={classes.margin}>
          <InputLabel  htmlFor="sex-customized-select" className={classes.bootstrapFormLabel}>
            Sex
          </InputLabel>
          <Select
            defaultValue="Sex"
            value={this.state.sex}
            onChange={this.handleChangeSex}
            input={<BootstrapInput name="sex" id="sex-customized-select" />}
          >
            <MenuItem value={10}>Male</MenuItem>
            <MenuItem value={20}>Female</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.margin}>
        <InputLabel htmlFor="nationality-customized-select" className={classes.bootstrapFormLabel}>
            Nationality
          </InputLabel>
          <Select
            value={this.state.nationality}
            onChange={this.handleChangeNationality}
            input={<BootstrapInput name="nationality" id="nationality-customized-select" />}
          >
            <MenuItem value={10}>Japan</MenuItem>
            <MenuItem value={20}>China</MenuItem>
            <MenuItem value={30}>Germany</MenuItem>
            <MenuItem value={40}>France</MenuItem>
            <MenuItem value={50}>Spain</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.margin}>
          <InputLabel htmlFor="age-customized-select" className={classes.bootstrapFormLabel}>
            Age
          </InputLabel>
          <Select
            value={this.state.age}
            onChange={this.handleChangeAge}
            input={<BootstrapInput name="age" id="age-customized-select" />}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
            <MenuItem value={40}>Forty</MenuItem>
            <MenuItem value={50}>Fifty</MenuItem>
          </Select>
        </FormControl>

        <FormControl className={classes.margin}>
          <InputLabel htmlFor="age-customized-select" className={classes.bootstrapFormLabel}>
            First Name
          </InputLabel>
          <BootstrapInput />
        </FormControl>
        <FormControl className={classes.margin}>
          <InputLabel htmlFor="age-customized-select" className={classes.bootstrapFormLabel}>
            Last Name
          </InputLabel>
          <BootstrapInput />
        </FormControl>
        
        <FormControl className={classes.margin}>
          <InputLabel htmlFor="age-customized-select" className={classes.bootstrapFormLabel}>
            Mail Address
          </InputLabel>
          <BootstrapInput />
        </FormControl>
        <FormControl className={classes.margin}>
          <InputLabel htmlFor="age-customized-select" className={classes.bootstrapFormLabel} type="password">
            Password
          </InputLabel>
          <BootstrapInput />
        </FormControl>
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

CustomizedSelects.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedSelects);