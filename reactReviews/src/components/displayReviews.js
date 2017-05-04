import React, { Component } from 'react';

export default class DisplayReviews extends Component {

  render() {
    var reviews = this.props.reviews;
    return (
        <div className="display-reviews">
            <p className="average">Average out of <span className="review-total">{reviews.length}</span> reviews</p>
            <div className="stars-average">
              <div className="rating">
                <span className="active">☆</span><span className="active">☆</span>
                <span>☆</span>
                <span>☆</span>
                <span>☆</span>
              </div>
            </div>

            <div className="review-container">
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
            </div>
        </div>
    );
  }
}
