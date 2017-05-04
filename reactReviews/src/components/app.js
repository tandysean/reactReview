import React, { Component } from 'react';
import DisplayReviews from './displayReviews';
import Header from './header';
import CreateReview from './createReview';
import ActionButton from './actionButton';

import {
  OVERVIEW,
  CREATE_REVIEW,
  CREATE_REVIEW_ACTION
} from '../resources/strings';

export default class App extends Component {
 constructor () {
   super();
   this.state = {
     isOverview: true,
     reviewList: [
       {
         name: "Sean",
         review: "Shittiest book ever",
         rating: 3
       },
       {
         name: "Dexter",
         review: "Woof! Woof! Woof! Grrrr Grrrr!!!",
         rating: 1
       },
       {
         name: "Jackson",
         review: "meh",
         rating: 2
       }
     ]
   };
 }

 handleNavigation(e) {
   this.setState({isOverview: !this.state.isOverview});
 }

 handleFormSubmit(e) {
   this.setState({isOverview: !this.state.isOverview});
 }

  render() {
    if (this.state.isOverview) {
      return (
        <div>
            <Header titleText= {OVERVIEW} />
            <DisplayReviews reviews= {this.state.reviewList} />
            <ActionButton actionLabel= {CREATE_REVIEW_ACTION} handleClickAction= {this.handleNavigation.bind(this)}/>
        </div>
      );
    }
    return (
      <div>
        <Header titleText= {CREATE_REVIEW} />
        <CreateReview submitHandler= {this.handleFormSubmit.bind(this)}/>
      </div>
    );
  }
}
