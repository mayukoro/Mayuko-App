import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import { orange200 } from 'material-ui/styles/colors';

const styles = {
  // avatar: {
  //   margin: 10,
  // },
  bigAvatar: {
    margin: 40,
    width: 400,
    height: 400,
    color: '#fff',
    backgroundColor: orange200,
  },
};

function UserPhoto(props) {
  const { classes } = props;
  return (
    <Grid container justify="center" alignItems="center">
      <Avatar alt="photo" src="/Sea.jpg" className={classes.bigAvatar} />
    </Grid>
  );
}

UserPhoto.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserPhoto);