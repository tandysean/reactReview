import React, { Component } from 'react';

export default class DisplayReviews extends Component {

  calculateAverage(reviews) {
    let total = 0;
    let average = 0;
    reviews.map(review => {
      total += review.rating;
      return total;
    });
    average = Math.ceil(total / reviews.length);
    console.log(average)
    return average;
  }

  starRenderer(averageRating) {
    return (
      <div className="rating">
        <span className={averageRating >= 1 ? 'active' : ''}>☆</span>
        <span className={averageRating >= 2 ? 'active' : ''}>☆</span>
        <span className={averageRating >= 3 ? 'active' : ''}>☆</span>
        <span className={averageRating >= 4 ? 'active' : ''}>☆</span>
        <span className={averageRating >= 5 ? 'active' : ''}>☆</span>
      </div>
    );
  }

  reviewRenderer(reviews) {
    return (
      <ul>
      {reviews.map(review => {
        return (
          <li key= {reviews.indexOf(review)} className="review">
            {review.review}
            <span className="name">{review.name}</span>
          </li>
        );
      })}
      </ul>
    );
  }

  render() {
    var reviews = this.props.reviews;
    var averageRating = this.calculateAverage(reviews);
    return (
        <div className="display-reviews">
            <p className="average">Average out of <span className="review-total">{reviews.length}</span> reviews</p>
            <div className="stars-average">
              {this.starRenderer(averageRating)}
            </div>

            <div className="review-container">
              {this.reviewRenderer(reviews)}
            </div>
        </div>
    );
  }
}
