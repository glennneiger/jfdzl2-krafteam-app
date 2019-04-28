import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';


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
  },
  avatar: {
    color: '#212529',
    backgroundColor: '#fed136',
    border: '#212529 1px solid',
  }
});

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

  getRating = (tile) => {
    // tile.rating1Sum/tile.rating1Count  
    // console.log(tile)
    return tile.rating3 ? tile.rating3 : 0;
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
                <Avatar
                  aria-label="Bar"
                  className={classes.avatar}>
                  {this.getRating(tile)}
                </Avatar>
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
    const barRank = this.state.rating;
    console.log(barRank)


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
