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

import { db } from '../../firebase';
// import { barListData } from '../../components/GridList'

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
        transform: 'rotate(180deg)',
    },
    avatar: {
        color: '#212529',
        backgroundColor: '#fed136',
        border: '#212529 1px solid',
    },
    palettePrimary: {
        backgroundColor: '#212529',
        color: '#fed136 !important',
        border: '#fed136 1px solid',
        // border: '#fff 1px solid',
        borderRadius: 3
    }

});

class BarCard extends React.Component {
    state = { expanded: false, theBar: null, rating: 0 };
    // state = { expanded: true };

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };

    onStarClick = (nextValue, prevValue, name) => {
        console.log(nextValue, prevValue, name);
        this.setState({
            theBar: {
                ...this.state.theBar,
                rating1: nextValue
            }
        }, () => {
            const id = this.props.match.params.id;
            const newSum = this.state.theBar.rating1Sum + nextValue;
            const newCount = this.state.theBar.rating1Count + 1;
            db.ref(`/places/${id}`).set({
                ...this.state.theBar,
                rating1: Math.round(newSum / newCount),
                rating1Sum: newSum,
                rating1Count: newCount,
            });
        });
    }
    onHashClick = (nextValue, prevValue, name) => {
        console.log(nextValue, prevValue, name);
        this.setState({
            theBar: {
                ...this.state.theBar,
                rating2: nextValue
            }
        }, () => {
            const id = this.props.match.params.id;
            const newSum = this.state.theBar.rating2Sum + nextValue;
            const newCount = this.state.theBar.rating2Count + 1;
            db.ref(`/places/${id}`).set({
                ...this.state.theBar,
                rating2: Math.round(newSum / newCount),
                rating2Sum: newSum,
                rating2Count: newCount,
            });
        });
    }
    onAtClick = (nextValue, prevValue, name) => {
        console.log(nextValue, prevValue, name);
        this.setState({
            theBar: {
                ...this.state.theBar,
                rating3: nextValue
            }
        }, () => {
            const id = this.props.match.params.id;
            const newSum = this.state.theBar.rating3Sum + nextValue;
            const newCount = this.state.theBar.rating3Count + 1;
            db.ref(`/places/${id}`).set({
                ...this.state.theBar,
                rating3: Math.round(newSum / newCount),
                rating3Sum: newSum,
                rating3Count: newCount,
            });
        });
    }


    componentDidMount() {
        const id = this.props.match.params.id;
        db.ref(`/places/${id}`).on('value', (snapshot) => {
            const bar = snapshot.val();
            const ratingSum = Math.round((parseInt(bar.rating1) + parseInt(bar.rating2) + parseInt(bar.rating3)) / 3);
            this.setState({ theBar: bar, rating: ratingSum })
        });
    }


    render() {
        const { classes } = this.props;
        const theBar = this.state.theBar;
        if (!theBar) {
            return <div>Loading...</div>
        }

        const { rating1 } = theBar;
        const { rating2 } = theBar;
        const { rating3 } = theBar;
        const barRank = this.state.rating;
        console.log(barRank)


        return (
            <div>
                <Card className={classes.card}>
                    <div className={classes.palettePrimary}>
                        <CardHeader
                            avatar={
                                <Avatar
                                    aria-label="Bar"
                                    className={classes.avatar}>
                                    {(barRank)}
                                </Avatar>
                            }
                            title={
                                <span style={{ color: '#fed136' }}>{theBar.name}</span>}
                            subheader={
                            <span style={{ color: '#fed136' }}>{theBar.address}, {theBar.city}, <a href={theBar.website}>{theBar.website}</a></span>}

                        />
                        <CardMedia
                            className={classes.media}
                            image={theBar.image}
                        >
                        </CardMedia>
                        <CardContent>
                            <Typography
                                component="p"
                                className={classes.avatar}>
                                Piwo A
                            </Typography>
                            <Typography
                                component="p"
                                className={classes.avatar}>
                                Piwo B
                            </Typography>
                            <Typography
                                component="p"
                                className={classes.avatar}>
                                Piwo C
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
                            Oceń
                        </CardActions>
                        <Collapse
                            in={this.state.expanded}
                            timeout="auto"
                            unmountOnExit>
                            <CardContent>
                                <div className="rating-stars">
                                    Wystrój :
                                    <StarRatingComponent
                                        // value={rating1}
                                        name='rate'
                                        starCount={5}
                                        emptyStarColor={'#fed13640'}
                                        starColor={'#fed136'}
                                        onStarClick={this.onStarClick} />
                                </div>
                                <div className="rating-stars">
                                    Obsługa :
                                    <StarRatingComponent
                                        // renderStarIcon={() => <span>#</span>}
                                        // value={rating2}
                                        name="rate2"
                                        starCount={5}
                                        emptyStarColor={'#fed13640'}
                                        starColor={'#fed136'}
                                        onStarClick={this.onHashClick} />
                                </div>
                                <div className="rating-stars">
                                    Ceny  :
                                    <StarRatingComponent
                                        // renderStarIcon={() => <span>@</span>}
                                        // value={rating3}
                                        name="rate3"
                                        starCount={5}
                                        emptyStarColor={'#fed13640'}
                                        starColor={'#fed136'}
                                        onStarClick={this.onAtClick} />
                                </div>
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
