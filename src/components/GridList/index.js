import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Avatar from '@material-ui/core/Avatar';


// import bar00 from '../Tiles/hop.jpg'
// import bar01 from '../Tiles/driver.jpg'
// import bar02 from '../Tiles/enemy.png'
// import bar03 from '../Tiles/alcohol.jpg'
// import bar04 from '../Tiles/panties.jpg'
// import bar05 from '../Tiles/sand.jpg'
// import bar06 from '../Tiles/panties.jpg'
// import bar07 from '../Tiles/sand.jpg'



const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    // backgroundColor: theme.palette.background.paper,
    // backgroundColor: '#fed136',
    // marginBottom: 60,

  },
  gridList: {
    width: 800,
    height: 'auto'
  },
  icon: {
    color: '#fed136',
  },
  palettePrimary: {
    backgroundColor: '#212529',
    color: '#fed136',
    // border: '#fed136 1px solid',
    border: '#fff 1px solid',
    borderRadius: 3
  }
});

// export const barListData = [
//   { name: 'BAR 00', location: 'lublin 000', rank: '2', link: 'http://onet.pl', image: bar00, title: 'enemy' },
//   { name: 'BAR 01', location: 'lublin 111', rank: '0', link: 'http://gazeta.pl', image: bar01, title: 'hop' },
//   { name: 'BAR 02', location: 'lublin 222', rank: '4', link: 'http://wp.pl', image: bar02, title: 'alcohol' },
//   { name: 'BAR 03', location: 'lublin 333', rank: '3', link: 'http://o2.pl', image: bar03, title: 'panties' },
//   { name: 'BAR 04', location: 'lublin 444', rank: '5', link: 'http://wykop.pl', image: bar04, title: 'sand' },
//   { name: 'BAR 05', location: 'lublin 555', rank: '1', link: 'http://olx.pl', image: bar05, title: 'driver' },
//   { name: 'BAR 06', location: 'lublin 666', rank: '5', link: 'http://allegro.pl', image: bar06, title: 'sand' },
//   { name: 'BAR 07', location: 'lublin 777', rank: '3', link: 'http://interia.pl', image: bar07, title: 'driver' },
// ];

class TitlebarGridList extends React.Component {

  state = {
    places: []
  }

  renderLoader = () => {
    return (
      <div>
        Ładowanie
      </div>
    )
  }

  renderPlaces = () => {
    const { classes } = this.props;
    const { places } = this.props;

    return (
      places.map((tile, index) => (
        <GridListTile className={classes.palettePrimary} key={tile.id}>
          <Link to={`/bar/${tile.id}`}>
            <img
              src={tile.image}
              alt={tile.name}
              style={{ width: '100%' }}
            />
          </Link>
          <GridListTileBar
            title={tile.name}
            subtitle={<span>adres: {tile.address}, {tile.city}</span>}
            style={{ color: '#fed136' }}
            actionIcon={
              <IconButton className={classes.icon}>
                <StarIcon />
                <StarIcon />
                <StarBorderIcon />
                <StarBorderIcon />
                <StarBorderIcon />
              </IconButton>
            }
          />
        </GridListTile>
      ))
    )
  }

  render() {
    const { classes } = this.props;
    const { places } = this.props;

    return (
      <div className={classes.root}>
        <GridList
          className={classes.gridList}
          cellHeight={'250'}
        >
          <GridListTile
            className={classes.palettePrimary}
            key="Subheader"
            cols={2}
            style={{ height: 'auto' }}
          >
            <ListSubheader style={{ color: '#fed136' }} component="div">Lista Barów</ListSubheader>
          </GridListTile>
          {!places.length && this.renderLoader()}
          {places.length && this.renderPlaces()}
        </GridList>
      </div>
    );
  }
}

TitlebarGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TitlebarGridList);
