import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
};

function BeerList(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="http://bi.gazeta.pl/im/ca/92/e7/z15176394V,Piwo-to-najstarszy-i-najczesciej-spozywany-napoj-a.jpg"
          title="Beer 1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Beer 1
          </Typography>
          <Typography component="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu dolor eget sem auctor luctus sit amet sed dui. Sed.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
        </IconButton>
      </CardActions>

      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="http://bi.gazeta.pl/im/ca/92/e7/z15176394V,Piwo-to-najstarszy-i-najczesciej-spozywany-napoj-a.jpg"
          title="Beer 1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Beer 2
          </Typography>
          <Typography component="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu dolor eget sem auctor luctus sit amet sed dui. Sed.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
        </IconButton>
      </CardActions>

      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="http://bi.gazeta.pl/im/ca/92/e7/z15176394V,Piwo-to-najstarszy-i-najczesciej-spozywany-napoj-a.jpg"
          title="Beer 1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Beer 3
          </Typography>
          <Typography component="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu dolor eget sem auctor luctus sit amet sed dui. Sed.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
        </IconButton>
      </CardActions>

      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="http://bi.gazeta.pl/im/ca/92/e7/z15176394V,Piwo-to-najstarszy-i-najczesciej-spozywany-napoj-a.jpg"
          title="Beer 1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Beer 4
          </Typography>
          <Typography component="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu dolor eget sem auctor luctus sit amet sed dui. Sed.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>

  );
}

BeerList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BeerList);

// class BeerList extends Component {
//    render() {
//      return (
//        <div>
//            Beer1
//            Beer2
//            Beer3
//            Beer4
//            Beer5
//            Beer6
//        </div>
//      );
//    }
//  }

//  export default BeerList;