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

import bar00 from '../Tiles/hop.jpg'
import bar01 from '../Tiles/driver.jpg'
import bar02 from '../Tiles/enemy.png'
import bar03 from '../Tiles/alcohol.jpg'
import bar04 from '../Tiles/panties.jpg'
import bar05 from '../Tiles/sand.jpg'

import { db } from '../../firebase';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    // backgroundColor: theme.palette.background.paper,
    backgroundColor: '#fed136',
  },
  gridList: {
    width: 800,
    height: '80%'
  },
  icon: {
    color: '#fed136',
  },
  palettePrimary: {
    backgroundColor: '#212529',
    color: '#fed136',
    border: '#fed136 1px solid',
    borderRadius: 3
  }
});

export const barListData = [
  { name: 'BAR 00', location: 'lublin 000', rank: '2', link: 'www.bar00', image: bar00, title: 'enemy' },
  { name: 'BAR 01', location: 'lublin 111', rank: '0', link: 'www.bar01', image: bar01, title: 'hop' },
  { name: 'BAR 02', location: 'lublin 222', rank: '4', link: 'www.bar02', image: bar02, title: 'alcohol' },
  { name: 'BAR 03', location: 'lublin 333', rank: '3', link: 'www.bar03', image: bar03, title: 'panties' },
  { name: 'BAR 04', location: 'lublin 444', rank: '5', link: 'www.bar04', image: bar04, title: 'sand' },
  { name: 'BAR 05', location: 'lublin 555', rank: '1', link: 'www.bar05', image: bar05, title: 'driver' },
];

class TitlebarGridList extends React.Component {

  state = {
    places: []
  }

  componentDidMount() {

    db.ref('/places/').on('value', (snapshot) => {
      const places = [];
      Object.entries(snapshot.val()).forEach(e => {
        const bar = {
          id: e[0],
          ...e[1]
        }
        places.push(bar);
      })
      this.setState({ places });
    })

    // fetch('https://jfdzl2-krafteam.firebaseio.com/places.json')
    // .then(response => response.json())
    // .then(data => {
    //   const places = [];
    //   Object.entries(data).forEach(elem => {
    //     const place = {
    //       id: elem[0],
    //       ...elem[1]
    //     }
    //     places.push(place);
    //   });
    //   this.setState({ places: places }); // this.setState({ places });
    // })
  }

  render() {
    const { classes } = this.props;

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
          {this.state.places.map((tile, index) => (
            <GridListTile className={classes.palettePrimary} key={tile.id}>
              <Link to={`/bar/${index}`}><img
                src={tile.image}
                alt={tile.name}
                style={{ width: '100%' }}
              />
              </Link>
              <GridListTileBar
                title={tile.name}
                subtitle={<span>address: {tile.address}</span>}
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
          ))}
        </GridList>
      </div>
    );
  }
}

TitlebarGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TitlebarGridList);
