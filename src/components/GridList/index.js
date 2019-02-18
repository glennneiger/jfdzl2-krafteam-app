import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
// import tileData from './tileData';

import bar01 from '../Tiles/daffyduck.png'
import bar02 from '../Tiles/bugsbunny.png'
import bar03 from '../Tiles/coyote.png'
import bar04 from '../Tiles/roadrunner.png'
import bar05 from '../Tiles/brick.jpg'
import bar06 from '../Tiles/hop.jpg'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 800,
    height: 600
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  palettePrimary: {
    backgroundColor: '#212529',
    color: '#fed136',
    border: '#fed136 5px solid',
    borderRadius: 5
  }
});

const tileData = [
  { name: 'bar 01', location: 'lublin 111', image: bar01, title: 'daffyduck' },
  { name: 'bar 02', location: 'lublin 222', image: bar02, title: 'bugsbunny' },
  { name: 'bar 03', location: 'lublin 333', image: bar03, title: 'coyote' },
  { name: 'bar 04', location: 'lublin 444', image: bar04, title: 'roadrunner' },
  { name: 'bar 05', location: 'lublin 555', image: bar05, title: 'roadrunner' },
  { name: 'bar 06', location: 'lublin 666', image: bar06, title: 'hop' },
];
/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 const tileData = [
   {
     img: image,
     title: 'Image',
     author: 'author',
   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
function TitlebarGridList(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <ListSubheader component="div">BarList</ListSubheader>
      <GridList cellHeight={400} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
        </GridListTile>
        {tileData.map(tile => (
          <GridListTile key={tile.img}>
            <img src={tile.image} alt={tile.title} />
            <GridListTileBar
               className={classes.palettePrimary}
               title={tile.name}
              subtitle={<span>address: {tile.location}</span>}
              actionIcon={
                <IconButton className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

TitlebarGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TitlebarGridList);