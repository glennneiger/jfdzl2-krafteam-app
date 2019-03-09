import React from 'react';
import ReactDOM from 'react-dom';
import StarRatingComponent from 'react-star-rating-component';

import './style.css'

class App extends React.Component {
  constructor(props) {
    super(props);

    onStarClick = this.onStarClick.bind(this)
    this.state = {
      rating: 1
    };
  }

  // onStarClick(nextValue, prevValue, name) {
  //   this.setState({ rating: nextValue });
  // }

  render() {
    const { rating } = this.state;

    return (
      <div>
        <h2>Rating from state: {rating}</h2>
        <div className="rating-stars">
          <StarRatingComponent
            name="rate1"
            starCount={5}
            value={rating}
            starColor="#fed136"
            onStarClick={this.onStarClick}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);