import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import StarRatingComponent from 'react-star-rating-component';


import { barListData } from '../../components/GridList'

const styles = theme => ({
    card: {
        maxWidth: 800,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    actions: {
        display: 'flex',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: '#212529',
    },
});

class BarCard extends React.Component {
    state = { expanded: false };

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };

    render() {
        const { classes } = this.props;
        const theBar = barListData[this.props.match.params.id]

        return (
            <Card className={classes.card}>
                <CardHeader
                    avatar={
                        <Avatar
                            aria-label="Bar"
                            className={classes.avatar}
                            style={{ color: '#fed136' }}
                        >
                            {theBar.key}
                        </Avatar>
                    }
                    title={theBar.name}
                    subheader={<span>address: {theBar.location}</span>}
                />
                <CardMedia
                    className={classes.media}
                    image={theBar.image}
                >
                </CardMedia>
                <CardContent>
                    <Typography component="p">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras malesuada bibendum nibh ac rutrum. In ullamcorper ullamcorper augue, ac imperdiet nulla dignissim in.
                    </Typography>
                    <hr></hr>
                    <Typography component="p">
                        Integer et sodales nibh. Proin tincidunt nunc ac turpis lacinia, et placerat massa cursus. Vivamus efficitur urna et neque dignissim tincidunt.
                    </Typography>
                </CardContent>
                <CardActions className={classes.actions} disableActionSpacing>
                    <IconButton aria-label="Add to favorites" style={{ color: 'red' }}>
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="Share">
                        <ShareIcon />
                    </IconButton>
                    <StarRatingComponent />

                    <IconButton
                        className={classnames(classes.expand, {
                            [classes.expandOpen]: this.state.expanded,
                        })}
                        onClick={this.handleExpandClick}
                        aria-expanded={this.state.expanded}
                        aria-label="Show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>Opis:</Typography>
                        <Typography paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras malesuada bibendum nibh ac rutrum. In ullamcorper ullamcorper augue, ac imperdiet nulla dignissim in. Integer et sodales nibh. Proin tincidunt nunc ac turpis lacinia, et placerat massa cursus.
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        );
    }
}

BarCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BarCard);
