import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { yellow100, orange100 } from 'material-ui/styles/colors';
// import tileData from './tileData';

const styles = theme => ({
  root: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,

  },
  gridList: {
    width: '100%',
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
    width:400,
    
    
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    width: '100%',
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
});



const tileData = [
   {
     title: 'people',
     author: 'author',
     backgroundColor: yellow100
   },
   {
    title: 'friends',
    author: 'author',
    backgroundColor: orange100,
   },
   {
    title: 'sister',
    author: 'author',
    backgroundColor: orange100,
   },
   {
    title: 'brother',
    author: 'author',
    backgroundColor: orange100,
   },
   {
    title: 'father',
    author: 'author',
    backgroundColor: orange100,
   },
   {
    title: 'mother',
    author: 'author',
    backgroundColor: orange100,
   },
   {
    title: 'brother',
    author: 'author',
    backgroundColor: orange100,
   },
   {
    title: 'father',
    author: 'author',
    backgroundColor: orange100,
   },
   {
    title: 'mother',
    author: 'author',
    backgroundColor: orange100,
   },
   {
    title: 'mother',
    author: 'author',
    backgroundColor: orange100,
   },
   {
    title: 'mother',
    author: 'author',
    backgroundColor: orange100,
   },
   {
    title: 'mother',
    author: 'author',
    backgroundColor: orange100,
   },
 
 ];

function SingleLineGridList(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <GridList item xs={12} className={classes.gridList} cols={1.5} >
        {tileData.map(tile => (
          <GridListTile>
            <img  alt={tile.title}  backgroundColor={tile.backgroundColor} />
            <GridListTileBar
              title={tile.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton>
                  <StarBorderIcon className={classes.title} />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

SingleLineGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SingleLineGridList);