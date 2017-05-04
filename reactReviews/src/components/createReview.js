import React, { Component } from 'react';
import ActionButton from './actionButton';
import {
  SUBMIT_REVIEW_ACTION
} from '../resources/strings';

export default class CreateReview extends Component {
  constructor(props) {
    super(props);
    this.state = {review : ''};
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitHandler();
  }

  render() {
    return (
      <div className= "reviews">
         <form onSubmit={this.handleSubmit.bind(this)}>
           <div className="rating_selection">
              <input defaultChecked id="rating_0" name="rating" type="radio" value="rating_0" />
              <label htmlFor="rating_0">
                <span>Unrated</span>
              </label>

              <input id="rating_1" name="rating" type="radio" value="rating_1" />
              <label htmlFor="rating_1">
                <span>Rate 1 Star</span>
              </label>

              <input id="rating_2" name="rating" type="radio" value="rating_2" />
              <label htmlFor="rating_2">
                <span>Rate 2 Stars</span>
              </label>

              <input id="rating_3" name="rating" type="radio" value="rating_3" />
              <label htmlFor="rating_3">
                <span>Rate 3 Stars</span>
              </label>

              <input id="rating_4" name="rating" type="radio" value="rating_4" />
              <label htmlFor="rating_4">
                <span>Rate 4 Stars</span>
              </label>

              <input id="rating_5" name="rating" type="radio" value="rating_5" />
              <label htmlFor="rating_5">
                <span>Rate 5 Stars</span>
              </label>
           </div>

           <input type="text" name="reviewerName" placeholder="Name" />
           <textarea rows="4" cols="50" placeholder="Your review. Keep it short"></textarea>
           <button className= "button main-action" action="submit">{SUBMIT_REVIEW_ACTION}</button>
         </form>
    </div>
    );
  }
}
