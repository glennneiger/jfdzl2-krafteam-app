import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
// import tileData from './tileData';

import bar01 from '../Tiles/daffyduck.png'
import bar02 from '../Tiles/bugsbunny.png'
import bar03 from '../Tiles/coyote.png'
import bar04 from '../Tiles/roadrunner.png'
import bar05 from '../Tiles/brick.jpg'
import bar06 from '../Tiles/hop.jpg'
// import { red } from '@material-ui/core/colors';

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
    color: '#fed136',
  },
  palettePrimary: {
    backgroundColor: '#212529',
    color: '#fed136',
    border: '#fed136 1px solid',
    borderRadius: 5
  }
});

const tileData = [
  { name: 'BAR 01', location: 'lublin 111', link: 'www.bar01', image: bar01, title: 'daffyduck' },
  { name: 'BAR 02', location: 'lublin 222', link: 'www.bar02', image: bar02, title: 'bugsbunny' },
  { name: 'BAR 03', location: 'lublin 333', link: 'www.bar03', image: bar03, title: 'coyote' },
  { name: 'BAR 04', location: 'lublin 444', link: 'www.bar04', image: bar04, title: 'roadrunner' },
  { name: 'BAR 05', location: 'lublin 555', link: 'www.bar05', image: bar05, title: 'roadrunner' },
  { name: 'BAR 06', location: 'lublin 666', link: 'www.bar06', image: bar06, title: 'hop' },
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
      <GridList cellHeight={300} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">BarList</ListSubheader>
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
                  <StarIcon className={classes.title} />
                  <StarIcon className={classes.title} />
                  <StarIcon className={classes.title} />
                  <StarBorderIcon className={classes.title} />
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

TitlebarGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TitlebarGridList);