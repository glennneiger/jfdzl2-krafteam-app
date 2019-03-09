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
        margin: 'auto'
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
        transform: 'rotate(360deg)',
    },
    avatar: {
        color: '#212529',
        backgroundColor: '#fed136',
    },
    palettePrimary: {
        backgroundColor: '#212529',
        color: '#fed136 !important',
        border: '#fed136 1px solid',
        borderRadius: 3
    }

});

class BarCard extends React.Component {
    state = { expanded: false };
    // state = { expanded: true };

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };

    onStarClick = (nextValue, prevValue, name) => {
        console.log(nextValue, prevValue, name);
        this.setState({ rating: nextValue });
        // this.setState({ rating2: nextValue });
    }
    onHashClick = (nextValue, prevValue, name) => {
        console.log(nextValue, prevValue, name);
        this.setState({ rating2: nextValue });
    }
    onAtClick = (nextValue, prevValue, name) => {
        console.log(nextValue, prevValue, name);
        this.setState({ rating3: nextValue });
    }

    render() {
        const { classes } = this.props;
        const theBar = barListData[this.props.match.params.id]
        const { rating } = this.state;
        const { rating2 } = this.state;
        const { rating3 } = this.state;
        const ratingSum = Math.round((rating + rating2 + rating3) / 3)
        console.log(ratingSum)

        return (
            <div style={{ backgroundColor: '#fed136' }}>
                <Card className={classes.card}>
                    <div className={classes.palettePrimary}>
                        <CardHeader
                            avatar={
                                <Avatar
                                    aria-label="Bar"
                                    className={classes.avatar}>
                                    {(ratingSum)}
                                </Avatar>
                            }
                            title={
                                <span style={{ color: '#fed136' }}>{theBar.name}</span>}
                            subheader={
                                <span style={{ color: '#fed136' }}>address: {theBar.location}, <a href={theBar.link}>website</a></span>}

                        />
                        <CardMedia
                            className={classes.media}
                            image={theBar.image}
                        >
                        </CardMedia>
                        <CardContent>
                        <Typography
                                component="p"
                                style={{ color: '#fed136' }}>
                                Piwo A
                                <hr></hr>
                            </Typography>
                            <Typography
                                component="p"
                                style={{ color: '#fed136' }}>
                                Piwo B
                                <hr></hr>
                            </Typography>
                            <Typography
                                component="p"
                                style={{ color: '#fed136' }}>
                                Piwo C
                                <hr></hr>
                            </Typography>
                        </CardContent>
                        <CardActions
                            className={classes.actions}
                            disableActionSpacing>
                            <IconButton
                                aria-label="Add to favorites"
                                style={{ color: 'red' }}>
                                <FavoriteBorderIcon />
                            </IconButton>
                            <IconButton
                                aria-label="Share"
                                style={{ color: '#fed136' }}>
                                <ShareIcon />
                            </IconButton>

                            <IconButton
                                className={classnames(classes.expand, {
                                    [classes.expandOpen]: this.state.expanded,
                                })}
                                onClick={this.handleExpandClick}
                                aria-expanded={this.state.expanded}
                                aria-label="Show more">
                                <ExpandMoreIcon style={{ color: '#fed136' }} />
                            </IconButton>
                            <Typography
                                style={{ color: '#fed136' }}>
                                Oceń
                                </Typography>
                        </CardActions>
                        <Collapse
                            in={this.state.expanded}
                            timeout="auto"
                            unmountOnExit>
                            <CardContent>
                                <Typography
                                    paragraph
                                    style={{ color: '#fed136' }}>
                                    <div className="rating-stars">
                                        Wystrój :
                                    <StarRatingComponent
                                            name='rate'
                                            starCount={5}
                                            value={rating}
                                            emptyStarColor={'#fed13640'}
                                            starColor={'#fed136'}
                                            onStarClick={this.onStarClick} />
                                    </div>
                                    <div className="rating-stars">
                                        Obsługa :
                                    <StarRatingComponent
                                            renderStarIcon={() => <span>#</span>}
                                            name="rate2"
                                            starCount={5}
                                            value={rating2}
                                            emptyStarColor={'#fed13640'}
                                            starColor={'#fed136'}
                                            onStarClick={this.onHashClick} />
                                    </div>
                                    <div className="rating-stars">
                                        Ceny  :
                                    <StarRatingComponent
                                            renderStarIcon={() => <span>@</span>}
                                            name="rate3"
                                            starCount={5}
                                            value={rating3}
                                            emptyStarColor={'#fed13640'}
                                            starColor={'#fed136'}
                                            onStarClick={this.onAtClick} />
                                    </div>
                                </Typography>
                            </CardContent>
                        </Collapse>
                    </div>
                </Card>
            </div>
        );
    }
}

BarCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BarCard);
